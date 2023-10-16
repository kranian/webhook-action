import * as core from '@actions/core'
import axios from 'axios'

async function run(): Promise<void> {
  try {
    const url: string = core.getInput('url');
    core.info('Sending POST request...');
    const data = JSON.parse(core.getInput('data'));
    const header = {
        "Content-Type": "application/json",
        "Accept": "application/vnd.tosslab.jandi-v2+json"
    }
    await axios.post(url,{headers: header}, data);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
