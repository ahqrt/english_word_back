/* eslint-disable */
export default async () => {
    const t = {
        ["./modules/database/constants"]: await import("./modules/database/constants"),
        ["./modules/content/entities/comment.entity"]: await import("./modules/content/entities/comment.entity"),
        ["./modules/content/entities/post.entity"]: await import("./modules/content/entities/post.entity"),
        ["./modules/content/constants"]: await import("./modules/content/constants"),
        ["./modules/content/entities/category.entity"]: await import("./modules/content/entities/category.entity"),
        ["./modules/content/entities/tag.entity"]: await import("./modules/content/entities/tag.entity"),
        ["./modules/word/entities/word.entity"]: await import("./modules/word/entities/word.entity")
    };
    return { "@nestjs/swagger": { "models": [[import("./modules/restful/dtos/delete.dto"), { "DeleteDto": { ids: { required: true, type: () => [String], description: "\u5F85\u5220\u9664\u6570\u636E\u7684ID\u5217\u8868" } } }], [import("./modules/restful/dtos/delete-with-trash.dto"), { "DeleteWithTrashDto": { trash: { required: false, type: () => Boolean, description: "\u662F\u5426\u8F6F\u5220\u9664" } }, "RestoreDto": { ids: { required: true, type: () => [String], description: "\u5F85\u6062\u590D\u6570\u636E\u7684ID\u5217\u8868" } } }], [import("./modules/restful/dtos/paginate.dto"), { "PaginateDto": { page: { required: false, type: () => Number, description: "\u5F53\u524D\u9875", default: 1, minimum: 1 }, limit: { required: false, type: () => Number, description: "\u6BCF\u9875\u6570\u636E\u91CF", default: 10, minimum: 1 } } }], [import("./modules/restful/dtos/paginate-width-trashed.dto"), { "PaginateWithTrashedDto": { trashed: { required: false, description: "\u6839\u636E\u8F6F\u5220\u9664\u72B6\u6001\u67E5\u8BE2", enum: t["./modules/database/constants"].SelectTrashMode } } }], [import("./modules/content/entities/comment.entity"), { "CommentEntity": { id: { required: true, type: () => String }, body: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, depth: { required: true, type: () => Object, default: 0 }, parent: { required: true, type: () => t["./modules/content/entities/comment.entity"].CommentEntity, nullable: true }, children: { required: true, type: () => [t["./modules/content/entities/comment.entity"].CommentEntity] }, post: { required: true, type: () => t["./modules/content/entities/post.entity"].PostEntity } } }], [import("./modules/content/entities/tag.entity"), { "TagEntity": { id: { required: true, type: () => String }, name: { required: true, type: () => String }, description: { required: false, type: () => String }, deletedAt: { required: true, type: () => Date }, postCount: { required: true, type: () => Number, description: "\u901A\u8FC7queryBuilder\u751F\u6210\u7684\u6587\u7AE0\u6570\u91CF(\u865A\u62DF\u5B57\u6BB5)" }, posts: { required: true, type: () => [t["./modules/content/entities/post.entity"].PostEntity] } } }], [import("./modules/content/entities/post.entity"), { "PostEntity": { id: { required: true, type: () => String }, title: { required: true, type: () => String }, body: { required: true, type: () => String }, summary: { required: false, type: () => String }, keywords: { required: false, type: () => [String] }, type: { required: true, enum: t["./modules/content/constants"].PostBodyType }, publishedAt: { required: false, type: () => Date, nullable: true }, customOrder: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, commentCount: { required: true, type: () => Number, description: "\u901A\u8FC7queryBuilder\u751F\u6210\u7684\u8BC4\u8BBA\u6570\u91CF(\u865A\u62DF\u5B57\u6BB5)" }, category: { required: true, type: () => t["./modules/content/entities/category.entity"].CategoryEntity }, tags: { required: true, type: () => [t["./modules/content/entities/tag.entity"].TagEntity] }, comments: { required: true, type: () => [t["./modules/content/entities/comment.entity"].CommentEntity] } } }], [import("./modules/content/entities/category.entity"), { "CategoryEntity": { id: { required: true, type: () => String }, name: { required: true, type: () => String }, customOrder: { required: true, type: () => Number }, deletedAt: { required: true, type: () => Date }, depth: { required: true, type: () => Object, default: 0 }, parent: { required: true, type: () => t["./modules/content/entities/category.entity"].CategoryEntity, nullable: true }, children: { required: true, type: () => [t["./modules/content/entities/category.entity"].CategoryEntity] }, posts: { required: true, type: () => [t["./modules/content/entities/post.entity"].PostEntity] } } }], [import("./modules/content/dtos/category.dto"), { "QueryCategoryTreeDto": { trashed: { required: false, description: "\u6839\u636E\u8F6F\u5220\u9664\u72B6\u6001\u67E5\u8BE2", enum: t["./modules/database/constants"].SelectTrashMode } }, "CreateCategoryDto": { name: { required: true, type: () => String, description: "\u5206\u7C7B\u540D", maxLength: 25 }, parent: { required: false, type: () => String, description: "\u7236\u5206\u7C7BID" }, customOrder: { required: false, type: () => Number, description: "\u81EA\u5B9A\u4E49\u6392\u5E8F", default: 0, minimum: 0 } }, "UpdateCategoryDto": { id: { required: true, type: () => String, description: "\u5F85\u66F4\u65B0ID" } } }], [import("./modules/content/dtos/post.dto"), { "QueryPostDto": { search: { required: false, type: () => String, description: "\u5168\u6587\u641C\u7D22", maxLength: 100 }, isPublished: { required: false, type: () => Boolean, description: "\u662F\u5426\u67E5\u8BE2\u5DF2\u53D1\u5E03(\u5168\u90E8\u6587\u7AE0:\u4E0D\u586B\u3001\u53EA\u67E5\u8BE2\u5DF2\u53D1\u5E03\u7684:true\u3001\u53EA\u67E5\u8BE2\u672A\u53D1\u5E03\u7684:false)" }, orderBy: { required: false, description: "\u67E5\u8BE2\u7ED3\u679C\u6392\u5E8F,\u4E0D\u586B\u5219\u7EFC\u5408\u6392\u5E8F", enum: t["./modules/content/constants"].PostOrderType }, category: { required: false, type: () => String, description: "\u6839\u636E\u5206\u7C7BID\u67E5\u8BE2\u6B64\u5206\u7C7B\u53CA\u5176\u540E\u4EE3\u5206\u7C7B\u4E0B\u7684\u6587\u7AE0" }, tag: { required: false, type: () => String, description: "\u6839\u636E\u7BA1\u7406\u6807\u7B7EID\u67E5\u8BE2" } }, "CreatePostDto": { title: { required: true, type: () => String, description: "\u6587\u7AE0\u6807\u9898", maxLength: 255 }, body: { required: true, type: () => String, description: "\u6587\u7AE0\u5185\u5BB9" }, summary: { required: false, type: () => String, description: "\u6587\u7AE0\u63CF\u8FF0", maxLength: 500 }, publishedAt: { required: false, type: () => Date, description: "\u662F\u5426\u53D1\u5E03(\u53D1\u5E03\u65F6\u95F4)" }, keywords: { required: false, type: () => [String], description: "SEO\u5173\u952E\u5B57", maxLength: 20 }, customOrder: { required: true, type: () => Object, description: "\u81EA\u5B9A\u4E49\u6392\u5E8F", default: 0, minimum: 0 }, category: { required: true, type: () => String, description: "\u6240\u5C5E\u5206\u7C7BID" }, tags: { required: false, type: () => [String], description: "\u5173\u8054\u6807\u7B7EID" } }, "UpdatePostDto": { id: { required: true, type: () => String, description: "\u5F85\u66F4\u65B0ID" } } }], [import("./modules/content/dtos/comment.dto"), { "QueryCommentDto": { post: { required: false, type: () => String, description: "\u6240\u5C5E\u6587\u7AE0ID" } }, "QueryCommentTreeDto": {}, "CreateCommentDto": { body: { required: true, type: () => String, description: "\u8BC4\u8BBA\u5185\u5BB9", maxLength: 1000 }, post: { required: true, type: () => String, description: "\u6240\u5C5E\u6587\u7AE0ID" }, parent: { required: false, type: () => String, description: "\u4E0A\u7EA7\u8BC4\u8BBAID" } } }], [import("./modules/content/dtos/tag.dto"), { "CreateTagDto": { name: { required: true, type: () => String, description: "\u6807\u7B7E\u540D\u79F0", maxLength: 255 }, description: { required: false, type: () => String, description: "\u6807\u7B7E\u63CF\u8FF0", maxLength: 500 } }, "UpdateTagDto": { id: { required: true, type: () => String, description: "\u5F85\u66F4\u65B0ID" } } }], [import("./modules/word/dtos/word.dto"), { "CreateWordDto": { word: { required: true, type: () => String }, sentence: { required: true, type: () => String }, usphone: { required: true, type: () => String }, ukphone: { required: true, type: () => String }, trans: { required: true, type: () => String } } }], [import("./modules/word/entities/word.entity"), { "WordEntity": { id: { required: true, type: () => String }, word: { required: true, type: () => String }, sentence: { required: true, type: () => String }, usphone: { required: true, type: () => String }, ukphone: { required: true, type: () => String }, trans: { required: true, type: () => String } } }]], "controllers": [[import("./modules/content/controllers/category.controller"), { "CategoryController": { "tree": { summary: "\u67E5\u8BE2\u5206\u7C7B\u6811", type: Object }, "list": { summary: "\u5206\u9875\u67E5\u8BE2\u5206\u7C7B\u5217\u8868" }, "detail": { summary: "\u5206\u9875\u8BE6\u89E3\u67E5\u8BE2", type: t["./modules/content/entities/category.entity"].CategoryEntity }, "store": { summary: "\u65B0\u589E\u5206\u7C7B", type: t["./modules/content/entities/category.entity"].CategoryEntity }, "update": { summary: "\u66F4\u65B0\u5206\u7C7B", type: t["./modules/content/entities/category.entity"].CategoryEntity }, "delete": { summary: "\u6279\u91CF\u5220\u9664\u5206\u7C7B", type: [t["./modules/content/entities/category.entity"].CategoryEntity] }, "restore": { summary: "\u6279\u91CF\u6062\u590D\u5206\u7C7B", type: [t["./modules/content/entities/category.entity"].CategoryEntity] } } }], [import("./modules/content/controllers/tag.controller"), { "TagController": { "list": { summary: "\u5206\u9875\u67E5\u8BE2\u6807\u7B7E\u5217\u8868" }, "detail": { summary: "\u67E5\u8BE2\u6807\u7B7E\u8BE6\u60C5", type: t["./modules/content/entities/tag.entity"].TagEntity }, "store": { summary: "\u6DFB\u52A0\u65B0\u6807\u7B7E", type: t["./modules/content/entities/tag.entity"].TagEntity }, "update": { summary: "\u66F4\u65B0\u6807\u7B7E", type: t["./modules/content/entities/tag.entity"].TagEntity }, "delete": { summary: "\u6279\u91CF\u5220\u9664\u6807\u7B7E", type: [t["./modules/content/entities/tag.entity"].TagEntity] }, "restore": { summary: "\u6279\u91CF\u6062\u590D\u6807\u7B7E", type: [t["./modules/content/entities/tag.entity"].TagEntity] } } }], [import("./modules/content/controllers/post.controller"), { "PostController": { "list": { summary: "\u5206\u9875\u67E5\u8BE2\u6587\u7AE0\u5217\u8868", type: Object }, "detail": { summary: "\u67E5\u8BE2\u6587\u7AE0\u8BE6\u60C5", type: t["./modules/content/entities/post.entity"].PostEntity }, "store": { summary: "\u65B0\u589E\u6587\u7AE0", type: t["./modules/content/entities/post.entity"].PostEntity }, "update": { summary: "\u67E5\u8BE2\u6587\u7AE0\u8BE6\u60C5", type: t["./modules/content/entities/post.entity"].PostEntity }, "delete": { summary: "\u6279\u91CF\u5220\u9664\u6587\u7AE0", type: [t["./modules/content/entities/post.entity"].PostEntity] }, "restore": { summary: "\u6279\u91CF\u6062\u590D\u6587\u7AE0", type: [t["./modules/content/entities/post.entity"].PostEntity] } } }], [import("./modules/content/controllers/comment.controller"), { "CommentController": { "tree": { summary: "\u67E5\u8BE2\u8BC4\u8BBA\u6811", type: [t["./modules/content/entities/comment.entity"].CommentEntity] }, "list": { summary: "\u5206\u9875\u67E5\u8BE2\u8BC4\u8BBA\u5217\u8868" }, "store": { summary: "\u65B0\u589E\u8BC4\u8BBA", type: t["./modules/content/entities/comment.entity"].CommentEntity }, "delete": { summary: "\u6279\u91CF\u5220\u9664\u8BC4\u8BBA", type: [t["./modules/content/entities/comment.entity"].CommentEntity] } } }], [import("./modules/word/controllers/word.controller"), { "WordController": { "list": {}, "initData": { type: String }, "addWord": { type: t["./modules/word/entities/word.entity"].WordEntity } } }]] } };
};