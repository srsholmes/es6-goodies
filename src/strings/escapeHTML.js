export default function escapeHTML(str) {
  let entityMap = {'&': '&amp;','<': '&lt;','>': '&gt;','"': '&quot;','\'': '&#39;','/': '&#x2F;'};
  return String(str).replace(/[&<>"'\/]/g, (s) => entityMap[s]);
}
