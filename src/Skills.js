import React, { useState, useEffect } from 'react';
import { AgCharts } from 'ag-charts-react';
import './Skills.css';
import HomeIcon from './HomeIcon';
import HamburgerIcon from './HamburgerIcon';
import CircularProgressBar from './CircularProgressBar';
import Carousel, { Cardly } from './Carousel';
import AnimatedText from './AnimatedText';
import gsap from 'gsap';


const Skills = () => {
    const [animate, setAnimate] = useState(false);
    const [isNext, setIsNext] = useState(true);
    const [rowData, setRowData] = useState([]);
    const [chartOptions, setChartOptions] = useState({});
    const [selectedPlot, setSelectedPlot] = useState('skillsPerCategory');
    const [searchQuery, setSearchQuery] = useState('');
    const [activePanel, setActivePanel] = useState('skills'); // Track the active panel





    useEffect(() => {
        // Scroll to the top of the page when the component is loaded
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    
        gsap.set('.animated-text-wrapper', { display: 'grid' });
    
        gsap.to('.animated-text-wrapper', {
          opacity: 0,
          duration: 0.5,
          delay: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set('.animated-text-wrapper', { display: 'none' });
          }
        });
      }, []);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/yabeizeng1121/webapp/main/data/new_skills_sheet.csv')
            .then(response => response.text())
            .then(data => {
                const parsedData = parseCSV(data);
                setRowData(parsedData.rows);
            });
    }, []); 

    
    useEffect(() => {
        if (rowData.length > 0) { // Ensure rowData is available before setting chart options
            if (selectedPlot === 'skillsPerCategory') {
                const chartData = generateChartData(rowData);
                setChartOptions(generateChartOptions(chartData));
            } else if (selectedPlot === 'programmingLanguages') {
                const chartData = generateProgrammingLanguagesData(rowData);
                setChartOptions(generateProgrammingLanguagesChartOptions(chartData));
            } else if (selectedPlot === 'tools') {
                const chartData = generateToolsData(rowData);
                setChartOptions(generateToolsChartOptions(chartData));
            } else if (selectedPlot === 'technologies') {
                const chartData = generateTechnologiesData(rowData);
                setChartOptions(generateTechnologiesChartOptions(chartData));
            } else if (selectedPlot === 'packages') {
                const chartData = generatePackagesData(rowData);
                setChartOptions(generatePackagesChartOptions(chartData));
            }
        }
    }, [selectedPlot, rowData]);

    const handlePanelSwitch = (panel) => {
        setActivePanel(panel);
    };
    
    const generateToolsData = (rows) => {
        return rows
            .filter(row => row['Tool'] === '1')
            .map(row => ({
                skill: row['Skill'],
                percent: parseFloat(row['Percent Apprehend']),
            }));
    };

    const generateTechnologiesData = (rows) => {
        return rows
            .filter(row => row['Technology'] === '1')
            .map(row => ({
                skill: row['Skill'],
                percent: parseFloat(row['Percent Apprehend']),
            }));
    };
    
    const generatePackagesData = (rows) => {
        return rows
            .filter(row => row['Package'] === '1')
            .map(row => ({
                skill: row['Skill'],
                percent: parseFloat(row['Percent Apprehend']),
            }));
    };

    const parseCSV = (data) => {
        const lines = data.split('\n');
        const headers = lines[0].split(',').map(header => header.trim());
        const rows = lines.slice(1).map(line => {
            const values = line.split(',');
            return headers.reduce((row, header, index) => {
                row[header] = values[index] ? values[index].trim() : ''; // Check if value is defined before trimming
                return row;
            }, {});
        });
        return { rows };
    };
    

    const generateChartData = (rows) => {
        const categories = ['Web/Dashboard Design', 'Machine Learning', 'Data Engineering', 'Data Science', 'Data Analysis', 'Teamwork'];
        return categories.map(category => ({
            category,
            count: rows.filter(row => row[category] === '1').length, // Count where value is '1'
        }));
    };

    const generateProgrammingLanguagesData = (rows) => {
        return rows
            .filter(row => row['Programming Language'] === '1')
            .map(row => ({
                skill: row['Skill'],
                percent: parseFloat(row['Percent Apprehend']),
            }));
    };

    const generateProgrammingLanguagesChartOptions = (chartData) => {
        return {
            data: chartData,
            series: [
                {
                    type: 'bar',
                    xKey: 'skill',
                    yKey: 'percent',
                    fill: 'rgba(255, 94, 58, 0.8)', // Sunset color for bars
                    stroke: 'rgba(255, 94, 58, 1)',
                }
            ],
            axes: [
                {
                    type: 'category',
                    position: 'bottom',
                    title: {
                        text: 'Programming Language',
                        color: '#fff',
                    },
                    label: {
                        color: '#fff',
                    }
                },
                {
                    type: 'number',
                    position: 'left',
                    title: {
                        text: 'Percent Apprehend',
                        color: '#fff',
                    },
                    label: {
                        color: '#fff',
                    }
                }
            ],
            title: {
                text: 'Percent Apprehend by Programming Language',
                fontSize: 18,
                color: '#fff',
            },
            background: {
                fill: '#000', // Black background
            },
            autoSize: true, // Automatically adjust to fit the container
        };
    };
    
    const generateToolsChartOptions = (chartData) => {
        return {
            data: chartData,
            series: [
                {
                    type: 'bar',
                    xKey: 'skill',
                    yKey: 'percent',
                    fill: 'rgba(255, 94, 58, 0.8)', // Sunset color for bars
                    stroke: 'rgba(255, 94, 58, 1)',
                }
            ],
            axes: [
                {
                    type: 'category',
                    position: 'bottom',
                    title: {
                        text: 'Tool',
                        color: '#fff',
                    },
                    label: {
                        color: '#fff',
                    }
                },
                {
                    type: 'number',
                    position: 'left',
                    title: {
                        text: 'Percent Apprehend',
                        color: '#fff',
                    },
                    label: {
                        color: '#fff',
                    }
                }
            ],
            title: {
                text: 'Percent Apprehend by Tool',
                fontSize: 18,
                color: '#fff',
            },
            background: {
                fill: '#000', // Black background
            },
            autoSize: true, // Automatically adjust to fit the container
        };
    };
    
    const generateTechnologiesChartOptions = (chartData) => {
        return {
            data: chartData,
            series: [
                {
                    type: 'bar',
                    xKey: 'skill',
                    yKey: 'percent',
                    fill: 'rgba(255, 94, 58, 0.8)', // Sunset color for bars
                    stroke: 'rgba(255, 94, 58, 1)',
                }
            ],
            axes: [
                {
                    type: 'category',
                    position: 'bottom',
                    title: {
                        text: 'Technology',
                        color: '#fff',
                    },
                    label: {
                        color: '#fff',
                    }
                },
                {
                    type: 'number',
                    position: 'left',
                    title: {
                        text: 'Percent Apprehend',
                        color: '#fff',
                    },
                    label: {
                        color: '#fff',
                    }
                }
            ],
            title: {
                text: 'Percent Apprehend by Technology',
                fontSize: 18,
                color: '#fff',
            },
            background: {
                fill: '#000', // Black background
            },
            autoSize: true, // Automatically adjust to fit the container
        };
    };
    
    const generatePackagesChartOptions = (chartData) => {
        return {
            data: chartData,
            series: [
                {
                    type: 'bar',
                    xKey: 'skill',
                    yKey: 'percent',
                    fill: 'rgba(255, 94, 58, 0.8)', // Sunset color for bars
                    stroke: 'rgba(255, 94, 58, 1)',
                }
            ],
            axes: [
                {
                    type: 'category',
                    position: 'bottom',
                    title: {
                        text: 'Package',
                        color: '#fff',
                    },
                    label: {
                        color: '#fff',
                    }
                },
                {
                    type: 'number',
                    position: 'left',
                    title: {
                        text: 'Percent Apprehend',
                        color: '#fff',
                    },
                    label: {
                        color: '#fff',
                    }
                }
            ],
            title: {
                text: 'Percent Apprehend by Package',
                fontSize: 18,
                color: '#fff',
            },
            background: {
                fill: '#000', // Black background
            },
            autoSize: true, // Automatically adjust to fit the container
        };
    };
    

    const generateChartOptions = (chartData) => {
        return {
            data: chartData,
            series: [
                {
                    type: 'bar',
                    xKey: 'category',
                    yKey: 'count',
                    fill: 'rgba(255, 94, 58, 0.8)', // Sunset color for bars
                    stroke: 'rgba(255, 94, 58, 1)',
                }
            ],
            axes: [
                {
                    type: 'category',
                    position: 'bottom',
                    title: {
                        text: 'Category',
                        color: '#fff',
                    },
                    label: {
                        color: '#fff',
                    }
                },
                {
                    type: 'number',
                    position: 'left',
                    title: {
                        text: 'Number of Skills',
                        color: '#fff',
                    },
                    label: {
                        color: '#fff',
                    }
                }
            ],
            title: {
                text: 'Number of Skills per Category',
                fontSize: 18,
                color: '#fff',
            },
            background: {
                fill: '#000', // Black background
            },
            autoSize: true, // Automatically adjust to fit the container
        };
    };
    const handlePlotChange = (event) => {
        setSelectedPlot(event.target.value);
    };

    return (
        <div className="skills-container">
            <HomeIcon />
            <HamburgerIcon />
            <div className="animated-text-wrapper">
                <AnimatedText word="Skills" />
            </div> 
            <div className="skill-dashboard-container">
                <div className="nav-panel">
                    <h2 className="nav-header">SKILLS & CERTIFICATION</h2>
                    <div className={`nav-button ${activePanel === 'skills' ? 'active' : ''}`} onClick={() => handlePanelSwitch('skills')}>SKILLS</div>
                    <div className={`nav-button ${activePanel === 'certification' ? 'active' : ''}`} onClick={() => handlePanelSwitch('certification')}>CERTIFICATIONS</div>
                </div>
    
                <div className="dashboard-content">
                    {activePanel === 'skills' ? (
                        <>
                            <div className="skills-panel">
                                <div className="visualizations-header">
                                    <h2>Visualizations for Skills</h2>
                                    <select value={selectedPlot} onChange={handlePlotChange}>
                                        <option value="skillsPerCategory">Skills Per Category </option>
                                        <option value="programmingLanguages">Programming Languages</option>
                                        <option value="tools">Tools</option>
                                        <option value="technologies">Technologies</option>
                                        <option value="packages">Packages</option>
                                    </select>
                                </div>
                                <div className="visualizations-container">
                                    <AgCharts options={chartOptions} style={{ height: '110%', width: '100%' }} />
                                </div>
    
                                <div className="skill-levels-description">
                                    <p>60%-75%: Intermediate level | 80%-90%: Advanced level | 95%-100%: Expert level</p>
                                </div>
                            </div>
    
                            {/* Third Panel on the Right */}
                            <div className="third-panel">
                                <div className='skill-everything'>
                                    <h2>Skills Overview</h2>
                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="Search using keyword, eg. data"
                                        value={searchQuery}
                                        onChange={(event) => setSearchQuery(event.target.value)}
                                    />
        
                                    <div className="skills-grid">
                                        {rowData.filter(row => {
                                            const query = searchQuery.toLowerCase();
                                            const skillNameMatch = row.Skill.toLowerCase().includes(query);
                                            const columnMatch = Object.keys(row).some(key =>
                                                key.toLowerCase().includes(query) && row[key] === '1'
                                            );
                                            return skillNameMatch || columnMatch;
                                        }).slice(0, rowData.length - 1).map((row, index) => (
                                            <CircularProgressBar 
                                                key={index} 
                                                percentage={row['Percent Apprehend']} 
                                                skillName={row.Skill} 
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="certification-panel">
                            <h2>Certifications</h2>
                            <div className="certification-cards">
                            <Carousel>
                                <Cardly 
                                    title="DevOps, DataOps, MLOps" 
                                    image="https://imagesforkaya.s3.amazonaws.com/coursera1.png" 
                                />
                                <Cardly 
                                    title="Cloud Computing Foundations" 
                                    image="https://imagesforkaya.s3.amazonaws.com/coursera2.png"
                                    
                                />
                                <Cardly
                                    title="AWS Machine Learning Speciality" 
                                    image="https://imagesforkaya.s3.amazonaws.com/awsml.png" 
                                />
                                <Cardly 
                                    title="Deep Learning with Pytorch" 
                                    image="https://imagesforkaya.s3.amazonaws.com/coursera3.png" 
                                />
                            </Carousel>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
    
};

export default Skills;
