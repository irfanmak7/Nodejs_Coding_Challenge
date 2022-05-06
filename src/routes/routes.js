import { getGithubRepoPullRequestData } from '../controllers/github';

const routes = (app) => {

  app.route('/api/github/repo/pulls')
  .get(async (req, res) => {
    let response = await getGithubRepoPullRequestData(req);
    console.log(response);
    res.send(response);
  })

}

export default routes;