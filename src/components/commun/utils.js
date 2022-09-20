export const getImgUrl = (path) => {
	const imgUrl = new URL(path, import.meta.url).href;
	return imgUrl;
};
