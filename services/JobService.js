import axios from 'axios'
import AuthService from '../services/AuthService'

const apiBaseURL = process.env['APP_API_BASE_URL'] + "jobs/";

export default {
    async getAllJobs() {
        let response = await axios.get(apiBaseURL);
        return response.data;
    },

    async createJobs(job) {
        let response =  await axios.post(apiBaseURL, job, { headers: { 'Authorization': `Bearer ${AuthService.getCurrentJWT()}`}});
        return response.data;
    },
}
