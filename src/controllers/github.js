import axios from "axios";
import { Error, Response, Info } from "../models/error"


export async function getGithubRepoPullRequestData(req, res = undefined) {
    let response = new Response('', new Error('Ok', 0));
    let array = new Array();
    let ownerName = '';
    let repoName = '';

    if(response.error.code === 0) {
        try {
            ownerName = req.query.ownerName;
        } catch (error) {
            response = new Response('', new Error('Owner name is required', 400));
        }

        try {
            if(ownerName === undefined || ownerName === null || ownerName.toString().length === 0) {
                response = new Response('', new Error('Owner name must have a value', 400));
            } 
        } catch (error) {
            response = new Response('', new Error('Error checking owner name', 400));
        }

        try {
            repoName = req.query.repoName;
        } catch (error) {
            response = new Response('', new Error('Repo name is required', 400));
        }

        try {
            if(repoName === undefined || repoName === null || repoName.toString().length === 0) {
                response = new Response('', new Error('Repo name must have a value', 400));
            }   
        } catch (error) {
            response = new Response('', new Error('Error checking repo name', 400));
        }
    }

    if (response.error.code === 0) {
        // Get pull requests from NASA apod-api
        let pullResponse = await axios.get(`https://api.github.com/repos/${ownerName}/${repoName}/pulls`);

        if (pullResponse.data) {
            for(let x = 0; x < pullResponse.data.length; x++) {
                let id = pullResponse.data[x].id;
                let number = pullResponse.data[x].number;
                let title = pullResponse.data[x].title;
                let author = '';
                let commits = '';
                let userId = pullResponse.data[x].user.login;
                let commitsUrl = pullResponse.data[x].commits_url;

                let obj = {
                    "id": id,
                    "number": number,
                    "title": title,
                };
            }
        }

    }
}