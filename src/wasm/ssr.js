import Components from "../components/server/index.js";

export function ssr() {
  const args = JSON.parse(Host.inputString());
  const { component = "", props = {} } = args;
  const Component = Components[component];
  const html = typeof Component === "function" ? Component(props) : "";
  Host.outputString(html);
}