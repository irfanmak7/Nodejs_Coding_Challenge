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
}