import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PlaceholderService } from './placeholder.service';

export interface Project {
    id: number;
    title: string;
    description: string;
    role: string;
    image: string;
    tags: string[];
    platform: string;
    year: number;
    downloads?: string;
    devTime: string;
    teamSize: number;
    gallery?: string[];
    features?: string[];
    outcome?: string;
    links?: {
        live?: string;
        github?: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    private projects: Project[] = [];

    constructor(private placeholderService: PlaceholderService) {
        const placeholderImage = this.placeholderService.generateProjectPlaceholder();

        this.projects = [
            {
                id: 1,
                title: 'Galaxy Defender',
                description: 'A retro-style 2D Unity shooter game where players battle waves of alien invaders. Developed using Unity 2D and C#, the game emphasizes smooth controls, dynamic level design, and engaging enemy AI.',
                role: 'Lead Gameplay Developer',
                image: placeholderImage,
                tags: ['Unity', 'Firebase', 'C#'],
                platform: '2D',
                year: 2024,
                downloads: '5,000+',
                devTime: '6 Months',
                teamSize: 3,
                gallery: [placeholderImage, placeholderImage, placeholderImage],
                features: [
                    'Designed and implemented the core combat mechanics in Unity 2D',
                    'Developed custom enemy AI with scaling difficulty',
                    'Integrated Google Play Services for leaderboards and achievements',
                    'Managed team workflow with GitHub and CI/CD pipelines'
                ],
                outcome: 'The game successfully attracted over 5,000 downloads within the first 3 months of release, with an average player rating of 4.5/5. The project demonstrated Chenwie\'s ability to deliver engaging gameplay while optimizing performance and build processes.',
                links: {
                    live: 'https://play.google.com',
                    github: 'https://github.com'
                }
            },
            {
                id: 2,
                title: 'Cyber Racing 3D',
                description: 'High-speed futuristic racing game with advanced physics and multiplayer capabilities. Features stunning neon visuals and competitive gameplay.',
                role: 'Lead Gameplay Developer',
                image: placeholderImage,
                tags: ['Unity', 'C#', 'Multiplayer'],
                platform: '3D',
                year: 2023,
                downloads: '10,000+',
                devTime: '8 Months',
                teamSize: 5,
                gallery: [placeholderImage, placeholderImage, placeholderImage],
                features: [
                    'Implemented advanced vehicle physics system',
                    'Built multiplayer racing infrastructure using Photon',
                    'Created procedural track generation system',
                    'Optimized rendering for mobile devices'
                ],
                outcome: 'Successfully launched with 10,000+ downloads and 4.7/5 rating. Featured in multiple gaming publications.',
                links: {
                    live: 'https://play.google.com'
                }
            },
            {
                id: 3,
                title: 'Dungeon Quest',
                description: 'Top-down RPG adventure with procedural dungeon generation and real-time combat. Combines exploration, strategy, and action.',
                role: 'Lead Gameplay Developer',
                image: placeholderImage,
                tags: ['Unity', 'Firebase', 'C#'],
                platform: '2D',
                year: 2023,
                downloads: '7,500+',
                devTime: '7 Months',
                teamSize: 4,
                gallery: [placeholderImage, placeholderImage, placeholderImage],
                features: [
                    'Developed procedural dungeon generation algorithm',
                    'Implemented inventory and equipment system',
                    'Created enemy AI with different behavior patterns',
                    'Integrated Firebase for cloud saves'
                ],
                outcome: 'Released to positive reviews with 7,500+ downloads. Players praised the replayability and dungeon variety.',
                links: {
                    live: 'https://play.google.com',
                    github: 'https://github.com'
                }
            }
        ];
    }

    // ... keep the rest of the methods
    getProjects(): Observable<Project[]> {
        return of(this.projects);
    }

    getFeaturedProjects(limit: number = 3): Observable<Project[]> {
        return of(this.projects.slice(0, limit));
    }

    getProjectById(id: number): Observable<Project | undefined> {
        const project = this.projects.find(p => p.id === id);
        return of(project);
    }

    getProjectsByPlatform(platform: string): Observable<Project[]> {
        const filtered = this.projects.filter(p =>
            p.platform.toLowerCase() === platform.toLowerCase()
        );
        return of(filtered);
    }
}