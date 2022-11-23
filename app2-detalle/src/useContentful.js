import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "k4xegp632nes",
    accessToken: "n2-x0pdQ-izOP8QIHNSoF6Jtsz4bfbzCnb3dfCYKKgI",
    host: "preview.contentful.com"
  });

  const getDetalle = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "detalle",
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

  return { getDetalle };
};

export default useContentful;
