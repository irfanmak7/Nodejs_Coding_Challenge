import axios from 'axios';


jest.mock('axios');

describe('getGithubRepoPullRequestData', () => {
  it('fetches successfully data from an API', async () => {
    let ownerName = 'ownerName';
    let repoName = 'repoName';
    const data = [
        {
          id: 1,
          number: 100,
          title: 'Pull Request 1',
          Author: 'Author 1',
          commit_count: 8
        },
        {
          id: 2,
          number: 101,
          title: 'Pull Request 2',
          Author: 'Author 2',
          commit_count: 4
        },
        {
          id: 3,
          number: 102,
          title: 'Pull Request 3',
          Author: 'Author 3',
          commit_count: 12
        }
      ]

    axios.get.mockResolvedValueOnce(data);

    const result = await axios.get(`https://api.github.com/repos/${ownerName}/${repoName}/pulls`);

    expect(result).toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(`https://api.github.com/repos/${ownerName}/${repoName}/pulls`);
  });
});