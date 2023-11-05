<div align="center">
  <p>
    <a href="https://postimg.cc/3W6yhNds">
      <img src="https://i.postimg.cc/Dyf1qbFw/pngimg-com-skeleton-PNG42640.png">
    </a>
  </p>

  <h1>NestJS Backoffice skeleton</h1>

  <p>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  </p>
</div>

<!-- TABLE OF CONTENTS -->
## 📝 Table of Contents

* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Environment](#environment)
    * [Database](#database)
    * [Running the app](#running-the-app)
* [Documentation](#documentation)

<!-- GETTING STARTED -->
## 🚀 Getting Started

This is an instructions on setting up the project locally.

### Prerequisites
Have **node** and **nvm** installed. Use version **18**.
```bash
$ npm install 18.16.0
```
Install **make** (optional)
```bash
$ apt-get update
```
```bash
$ apt-get install make
```
_or_
```bash
$ apt-get install --reinstall make
```

### Installation

1. Clone repository
    ```bash
    $ git clone https://github.com/crissancar/nestjs-skeleton-api.git
    ```
2. Install dependencies
    ```bash
    $ make deps
    ```
    _or_
    ```bash
    $ npm install
    ```

### Environment
Create an `.env` file in the root directory *(check `.env.example` file)*.

### Database
Backoffice is connected to the API database

### Running the app
```bash
$ make start
```
_or_
```bash
$ npm run start:dev
```

<!-- DOCUMENTATION -->
## 📖 Documentation
-  [AdminJS](https://docs.adminjs.co/)
