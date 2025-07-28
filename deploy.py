# The purpose of this file is to updates paths in the React build
# `react-scripts` writes the paths as have "/path/to/file" instead of "./path/to/file"
import json


# Updates "/build/asset-manifest.json"
def updateAssetManifest():
    with open("./build/asset-manifest.json", "r") as file:
        data = json.load(file)

    # Updating path from "/static/etc" to "./static/etc"
    for k, v in data["files"].items():
        if v[0] != ".":
            data[k] = "." + v

    with open("./build/asset-manifest.json", "w") as file:
        json.dump(data, file)


# Updates "/build/index.html"
def updateIndexHtml():
    with open("./build/index.html", "r") as file:
        html = file.read()

    html = html.replace('href="/', 'href="./')
    html = html.replace('src="/', 'src="./')

    with open("./build/index.html", "w") as file:
        file.write(html)


if __name__ == "__main__":
    updateAssetManifest()
    updateIndexHtml()
