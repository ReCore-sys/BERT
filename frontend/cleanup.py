# get the randomised file name from the html file

with open("./main-page/dist/index.html", "+r") as f:
    html = f.read()
    jsname = html.split('<script type="module" crossorigin src="/assets/')[1].split(
        '"></script>'
    )[0]
    with open(f"./main-page/dist/assets/{jsname}") as jsfile:
        js = jsfile.read()
        # replace the script with just the raw js in the script tag
        html = html.replace(
            f'<script type="module" crossorigin src="/assets/{jsname}"></script>',
            f'<script type="module">{js}</script>',
        )
    # now the same with the css
    cssname = html.split('<link rel="stylesheet" crossorigin href="/assets/')[1].split(
        '">'
    )[0]
    with open(f"./main-page/dist/assets/{cssname}") as cssfile:
        css = cssfile.read()
        html = html.replace(
            f'<link rel="stylesheet" crossorigin href="/assets/{cssname}">',
            f"<style>{css}</style>",
        )
    f.write(html)
