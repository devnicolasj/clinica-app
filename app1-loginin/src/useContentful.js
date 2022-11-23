import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "k4xegp632nes",
    accessToken: "n2-x0pdQ-izOP8QIHNSoF6Jtsz4bfbzCnb3dfCYKKgI",
    host: "preview.contentful.com"
  });

  const getLoginin = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "loginin",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const imagen = item.fields.imagen.fields;
        return {
          ...item.fields,
          imagen
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching servicios ${error}`);
    }
  };

  return { getLoginin };
};

export default useContentful;
