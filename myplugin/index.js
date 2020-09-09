module.exports = () => {
    return {
        visitor: {
            Identifier(path) {
                path.node.name = path.node.name.toUpperCase("");
            }
        },
    };
}
