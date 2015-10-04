export default function maxNumber(arr) {
	return Array.isArray(arr) ? Math.max(...arr) :  Math.max(...arr.split(/[^0-9\.]+/g));
}
