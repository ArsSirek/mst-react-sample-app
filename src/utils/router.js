import route from "path-match"

export default function createRouter(routes, options) {
    let basename = options.basename || '';
    const matchers = Object.keys(routes).map(path => [route()(basename + path), routes[path]]);
    return function (path) {
        return matchers.some(([matcher, f]) => {
            const result = matcher(path);
            if (result === false) return false;
            f(result);
            return true
        })
    }
}

export const openInPublicPart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(e.target.href, 'public_site');
};
