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
            slugs = res.map(function (file) {
                return file.replace(postsDirectory, "").replace(".md", "");
            });
            fs.writeFileSync(
                path.join(process.cwd(), "all-slugs.json"),
                JSON.stringify(slugs)
            );
            getMetaData(slugs);
        }
    });
};

const getMetaData = (slugs) => {
    let metaData = [];
    slugs.forEach((slug) => {
        let filePath = path.join(process.cwd(), "posts", slug, "index.md");
        let file = fs.readFileSync(filePath, "utf8");
        let meta = matter(file);
        if (meta.data.draft === true) return;
        meta.data["slug"] = slug;
        metaData.push(meta.data);
    });

    // sort metaData by published date
    metaData.sort((a, b) => {
        return new Date(b.published) - new Date(a.published);
    });

    fs.writeFileSync(
        path.join(process.cwd(), "meta-data.json"),
        JSON.stringify(metaData)
    );

    // get 10 latest posts
    let latestPosts = metaData.slice(0, 10);
    fs.writeFileSync(
        path.join(process.cwd(), "latest-posts.json"),
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
        path.join(process.cwd(), "all-tags.json"),
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
            path.join(process.cwd(), "tags", tag + ".json"),
            JSON.stringify(posts)
        );
    });
};
getAllSlugs();
