export default function Scope(id: string) {
  return document.querySelector(`[data-scope='${id}']`) as HTMLDivElement;
}
