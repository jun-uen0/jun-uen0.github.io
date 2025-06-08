import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Terraform",
    "Ansible",
    "GCP",
    "AWS",
    "Kubernetes",
    "Docker"
];

const labelsSecond = [
    "GitLab CI/CD",
    "GitHub Actions",
    "Bash",
    "Python",
    "Nexus"
];

const labelsThird = [
    "Prometheus",
    "Grafana",
    "Zabbix",
    "CloudWatch"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud Infrastructure & Automation</h3>
                    <p>Designed and automated cloud environments on AWS and GCP using Terraform and CloudFormation, orchestrating Kubernetes workloads with Docker.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGitlab} size="3x"/>
                    <h3>CI/CD & DevOps</h3>
                    <p>Implemented robust GitLab CI/CD pipelines and GitHub Actions workflows, automating build and deployment processes with Bash and Python scripts.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Monitoring & Reliability</h3>
                    <p>Established monitoring solutions with Prometheus, Grafana, Zabbix and CloudWatch to ensure system reliability and proactive alerting.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
