<div align="center">
    <h1>Environment Development NestJS with Docker</h1>
</div>


<div align="center">
    <img width="600" height="200" src="img/nestjs_e_docker.png">
</div>

#

<h2>
    <details>
        <summary>What is it</summary>
        <p></p>
        <p><strong>Description:</strong> NestJS development environment in docker. The project directory has the volume mapped allowing any changes to be reflected in the running container.</p>
        <p><strong>Note - </strong>Tested and validated in linux arch like environment</p>
    </details>
</h2>

#
<div align="center">
    <h1>Services  "docker-composer.yml"</h1>

<p align="center">
    <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=nestjs,postgres,docker,redis,nginx" />
    </a>
</p>
</div>

# Requirements
> ### git
> sudo pacman -S git

> ### docker
> sudo pacman -S docker

> ### docker-compose
> sudo pacman -S docker-compose


#
<div align="center">
    <h1>How to use</h1>
</div>

<h3>
<details>
<summary>Clone this repository</summary>

```
git clone https://github.com/majurr/docker-nestjs.git
```

</details>
</h3>

<h3>
<details>
<summary>Setting .env</summary>
<br> 

> 1. rename .env.sample to .env
```
mv .env.sample .env
```

> 2. replace values .env

</details>
</h3>

<h3>
<details>
<summary>Run</summary>
<br> 

```
# command run
docker-compose up -d --build
```
```
# access by browser
http://17.0.0.1:8009
```
> Everything being ok, you will see the following message
> 
> >>>> Welcome to App NestJS (^_^) <<<<
</details>
</h3>