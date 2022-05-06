import axios from "axios";
import { Error, Response, Info } from "../models/error"


export async function getGithubRepoPullRequestData(req, res = undefined) {
    let response = new Response('', new Error('Ok', 0));
    let array = new Array();
    let ownerName = '';
    let repoName = '';
}