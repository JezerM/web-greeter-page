# How to contribute

You can either create an Issue stating which themes you want to be included here, or create a Pull Request with the necessary changes.

## Pull Request

To create a Pull Request, you need to add the LightDM theme information in the `community` section of `src/assets/themes.json`:

```jsonc
{
  "community": [
    {
      "name": "The LightDM theme name", // e.g: "Gruvbox"
      "author": "GitHub username (GitHub realname)", // e.g: "jezerm (Jezer Mejía)".
      "repo": "https://github.com/username/theme",
      "description": "A simple description of the theme.",
      "multiMonitor": false, // If the theme contains a `index.yml` that allows the multi-monitor support in the greeters.
      "imagePrimary": "url/to/image",
      "imageSecondary": "url/to/image", // This can be optional
    }
  ]
}
```

Also, include the repo's link inside `README.md`:

```markdown
## List of themes

### Community themes

- [The LightDM theme name](theme's repo)
```

### Considerations

#### The theme is not maintained

If not maintained and doesn't work with our greeters, do not bother to include it. Instead, you could fork and fix it to make it compatible, or create an Issue where I could try to fix it.

If not maintained but you found a fork that does work, include the URL of the working one. Also, the `author` property should contain both authors: the original creator, and the fixer, with the following format: `originalUsername (originalName) && fixerUsername (fixerName)`. If the fork is not so much related to the original project, only include the fork's author.

#### Multi-monitor support

The multi-monitor support is available in web-greeter and nody-greeter. Sea-greeter, still in development, does not support a full multi-monitor setup yet.

If the theme provides a `index.yml` file, check that it does actually have a `secondary_html` property, like the following:

```yaml
primary_html: "index.html"
secondary_html: "secondary.html"
```

#### Images

If the theme's GitHub repo doesn't provide a screenshot of the theme, or you do have a better image, include it inside `public/images/` and reference it at `themes.json`. Else, just include the URL to the image.
