// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    },
    featured: {
      type: "boolean",
      required: false
    },
    image: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: true
    },
    author: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    }
  }
}));
var Departments = defineDocumentType(() => ({
  name: "department",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    },
    featured: {
      type: "boolean",
      required: false
    },
    image: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: true
    },
    author: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    }
  }
}));
var Team = defineDocumentType(() => ({
  name: "team",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    position: {
      type: "string"
    },
    image: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Blog, Departments, Team]
});
export {
  Blog,
  Departments,
  Team,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZJVTUCNC.mjs.map
