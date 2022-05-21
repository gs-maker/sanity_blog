import client from "@sanity/client";

export default client({
	projectId: "yyd8eu79",
	dataset: "production",
	useCdn: true,
    apiVersion:"2022-09-01",
});
