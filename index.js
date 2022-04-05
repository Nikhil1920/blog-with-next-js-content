let fs = require("fs");
let path = require("path");
const glob = require("glob");
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd() + "/posts");

const getAllSlugs = () => {
    let slugs = [];
    glob(postsDirectory + "/**/*.md", function (err, res) {
        if (err) {
            console.log("Error", err);
        } else {
            res.forEach((file) => {
                const path = file.replace(postsDirectory, "");
                const slug = path.replace("index.md", "").replace(".md", "");
                slugs.push({ path: path, slug: slug });
            });
            fs.writeFileSync(
                path.join(process.cwd(), "data", "all-slugs.json"),
                JSON.stringify(slugs)
            );
            getMetaData(slugs);
        }
    });
};

const getMetaData = (slugs) => {
    let metaData = [];
    slugs.forEach((slug) => {
        let filePath = path.join(process.cwd(), "posts", slug.path);
        let file = fs.readFileSync(filePath, "utf8");
        let meta = matter(file);
        if (meta.data.draft === true) return;
        meta.data["slug"] = slug.slug;
        metaData.push(meta.data);
        const fileName = slug.slug.replace(/([^a-z0-9]+)/gi, "-") + ".json";
        fs.writeFileSync(
            path.join(process.cwd(), "data/posts", fileName),
            JSON.stringify(meta.content)
        );
    });

    // sort metaData by published date
    metaData.sort((a, b) => {
        return new Date(b.published) - new Date(a.published);
    });

    fs.writeFileSync(
        path.join(process.cwd(), "data", "meta-data.json"),
        JSON.stringify(metaData)
    );

    // get 10 latest posts
    let latestPosts = metaData.slice(0, 10);
    fs.writeFileSync(
        path.join(process.cwd(), "data", "latest-posts.json"),
        JSON.stringify(latestPosts)
    );

    getAllTags(metaData);
};

const getAllTags = (posts) => {
    let tags = [];
    posts.forEach((post) => {
        post.tags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
    });
    fs.writeFileSync(
        path.join(process.cwd(), "data", "all-tags.json"),
        JSON.stringify(tags)
    );
    getPostsByTag(tags, posts);
};

const getPostsByTag = (tags, metaData) => {
    tags.forEach((tag) => {
        let posts = metaData.filter((post) => {
            return post.tags.includes(tag);
        });
        fs.writeFileSync(
            path.join(process.cwd(), "data/tags", tag + ".json"),
            JSON.stringify(posts)
        );
    });
};
getAllSlugs();
