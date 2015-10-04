export default function removeDuplicate(arr) {
	return [...new Set(arr)];
}