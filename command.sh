#!/bin/bash
apt update -y
apt upgrade -y 
pkg update
pkg upgrade 
pkg install nodejs git -y
pkg install git
pkg install php
pkg install wget
pkg install ffmpeg
pkg install npm
clear
git clone https://github.com/BvsshXyz/BotWhatsapp
cd BotWhatsapp
yarn install
npm start