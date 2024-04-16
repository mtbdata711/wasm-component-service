<?php

require 'vendor/autoload.php';

// set timer from when the script starts
$startTime = microtime(true);

use Extism\Plugin;
use Extism\Manifest;
use Extism\PathWasmSource;

$wasm = new PathWasmSource("./dist/wasm/ssr.wasm");
$manifest = new Manifest($wasm);
$plugin = new Plugin($manifest, true);

function renderComponent(string $name, array $props = []): string
{
    global $plugin;
    $input = [
        "component" => $name,
        "props" => $props,
    ];
    return $plugin->call("ssr", json_encode($input));
}

echo renderComponent(
    "Heading",
    [
        "text" => "Rendering (p)React Components in PHP using WebAssembly"
    ]
);

echo renderComponent(
    "GifPlayer",
    [
        "src" => "https://ual-media-res.cloudinary.com/image/fetch/c_fill,f_auto,q_auto,w_auto/f_mp4/https://portfolio-tools.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/11/21181522/%E6%A0%91%E6%A0%B9%E6%A0%91%E7%9A%AE03mp4_3-1.gif"
    ]
);

$endTime = microtime(true);

echo "<p>Time taken: " . ($endTime - $startTime) . " seconds</p>";

// echo in js file at dist/client/bundle
echo "<script src='./dist/client/bundle.js'></script>";