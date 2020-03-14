# 🇸🇬 NS Links
> A list of resources to help people serving National Service in Singapore 

## Gallery (WIP)
![desktop view](./readme-images/desktop-view.png)

## Resources
Most of the resources are from Reddit ([r/Singapore](https://www.reddit.com/r/singapore) and [r/NationalServiceSG](https://reddit.com/r/nationalservicesg)).

## Built with
- Nuxt ~~Saber~~
- Vue
- SCSS

All the content can be found in `pages/index.md`. The links are in the markdown-link format, along with extra styling to make the unordered list look like a button group.

## Issues
1. Currently two YML plugins are being used (`js-yaml-loader`, and `yaml`). This is because I am unable to use `YAML` in a Nuxt page's `asyncData` function properly.
2. Find a way to store global site metadata (no need to hardcode "NS Link" at the end of all page titles in the `head` property).

## Add a link (contribute)
To add a link, you can either message me on reddit ([u/themindstorm](https://www.reddit.com/user/themindstorm)), or create an issue/pull request here.