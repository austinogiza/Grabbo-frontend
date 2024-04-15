// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
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
var Department = defineDocumentType(() => ({
  name: "Department",
  filePathPattern: `department/**/*.mdx`,
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
  name: "Team",
  filePathPattern: `team/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
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
  documentTypes: [Blog, Department, Team]
});
export {
  Blog,
  Department,
  Team,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XJUHQKPD.mjs.map
