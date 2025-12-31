import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from '../../services/app-state';

type DownloadItem = {
    name: string;
    fileExt: string;
    platform: 'winX64' | 'linuxX64' | 'macX64' | 'macM1' | 'html' | 'android-debug' | 'java';
};

@Component({
    selector: 'app-downloads',
    imports: [CommonModule],
    templateUrl: './downloads.html',
    styleUrl: './downloads.scss',
})
export class Downloads {
    appState = inject(AppState);
    downloads: DownloadItem[] = [
        {
            name: `${this.appState.appName} para Linux`,
            fileExt: 'zip',
            platform: 'linuxX64',
        },
        {
            name: `${this.appState.appName} para Android`,
            fileExt: 'apk',
            platform: 'android-debug',
        },
        {
            name: `${this.appState.appName} para Java`,
            fileExt: 'jar',
            platform: 'java',
        },
        {
            name: `${this.appState.appName} para macOS (Inel)`,
            fileExt: 'zip',
            platform: 'macX64',
        },
        {
            name: `${this.appState.appName} para macOS (M1)`,
            fileExt: 'zip',
            platform: 'macM1',
        },
        {
            name: `${this.appState.appName} para Windows`,
            fileExt: 'zip',
            platform: 'winX64',
        },
    ];

    getIcon(platform: DownloadItem['platform']): string {
        switch (platform) {
            case 'linuxX64':
                return '🐧';
            case 'android-debug':
                return '🤖';
            case 'macX64':
                return '🍎';
            case 'macM1':
                return '🍎';
            case 'winX64':
                return '🪟';
            case 'java':
                return '☕';
            case 'html':
                return '🌐';
        }
    }
    
    getFileName(download: any): string {
        //return `/downloads/IAsRevenge-${download.platform}-${this.appState.version()}-prod.${download.fileExt}`;
        return `https://cdn.bytesretro.es/IAsRevenge-${download.platform}-${this.appState.version()}-prod.${download.fileExt}`;
    }
}
