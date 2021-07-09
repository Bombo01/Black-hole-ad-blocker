# Chromium ad-blocker

Chromium ad-blocker is an invisible ad-blocker created for Chromium-based browser (Brave, Chrome...).

> This project is currently under development, therefore it may not work as expected.

## Table of content

- [How it works](#how-it-works-hammer_and_wrench)
- [Install the preview](#install-the-preview-file_folder)
- [Blocked sites](#blocked-sites-no_entry)

## How it works :hammer_and_wrench:

When a request is made by the client it passes through the extension that redirects the sites in the blacklist to a non-existent one which,therefore, responds with an error, and the advertisement cannot load.

In this way, the sites fail to recognize this as an ad-blocker but simply as a site error.

## Install the preview :file_folder:

Installing the preview is quite easy.

1. Download the source code and extract the folder
2. Go on your Chromium browser and open extensions settings as
    - `brave://extensions/`
    - `chrome://extensions/`
3. Enable developer mode
4. Click on Load Unpacked and select your Unzip folder
5. Now the extension is loaded.

## Blocked sites :no_entry:

List of sites loaded: 
- [Adguard DNS](https://v.firebog.net/hosts/AdguardDNS.txt) updated on 08/07/2021
