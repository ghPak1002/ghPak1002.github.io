# Gyuhyeon Pak — Research Portfolio

Personal research portfolio and academic CV website for **Gyuhyeon Pak**, a graduate researcher working on robotic perception and spatial intelligence.

The website presents research interests, publications, manuscripts, projects, and professional information related to:

* Visual-Inertial SLAM
* Gaussian Splatting
* LiDAR Localization
* Robotic Perception
* Sensor Calibration
* 3D Place Recognition

## Live Website

https://ghpak.github.io

## Website Sections

* **About** — Research background and interests
* **Research** — Major research topics
* **Publications** — Journal and conference publications
* **Manuscripts** — Ongoing research work
* **Projects** — Government-funded and industry-sponsored research projects
* **CV** — Academic and professional experience
* **Contact** — Email copy functionality

## Technology Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* GitHub Pages
* GitHub Actions

## Local Development

Clone the repository:

```bash
git clone https://github.com/ghpak/ghpak.github.io.git
cd ghpak.github.io
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the following address in a browser:

```text
http://localhost:3000
```

## Production Build

Create a static production build:

```bash
npm run build
```

The exported website files will be generated in the `out` directory.

## Deployment

The website is automatically deployed to GitHub Pages through GitHub Actions whenever changes are pushed to the `main` branch.

```bash
git add .
git commit -m "Update portfolio"
git push
```

After the workflow completes, the updated website will be available at:

```text
https://ghPak1002.github.io
```

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── Navbar.tsx
├── next.config.ts
├── package.json
└── README.md
```

## Publications Featured on the Website

### Journal Publications
* **VIGS SLAM: IMU-Based Large-Scale RGB-D 3-D Gaussian Splatting SLAM**
  Gyuhyeon Pak, and Euntai Kim
  IEEE Transactions on Instrumentation and Measurement, vol. 75, pp. 5010510–5010520, June 2026.

* **GRIL-Calib: Targetless Ground Robot IMU-LiDAR Extrinsic Calibration Method using Ground Plane Motion Constraints**
  TaeYoung Kim, Gyuhyeon Pak, and Euntai Kim
  IEEE Robotics and Automation Letters, vol. 9, no. 6, pp. 5409–5416, June 2024.

### Conference Publications

* **RE-TRIP: Reflectivity Instance Augmented Triangle Descriptor for 3D Place Recognition**
  Yechan Park, Gyuhyeon Pak, and Euntai Kim
  IEEE International Conference on Robotics and Automation, Atlanta, USA, May 2025.

* **Robust Rotation Initialization for LVI Localization Via 2D-3D Line Matching**
  Gyuhyeon Pak, Haemin Cho, and Euntai Kim
  International Conference on Control, Automation and Systems, Incheon, Korea, November 2025.

* **Leveraging 2D Semantic Information for Dynamic Object Removal in Static 3D Point Cloud Map Construction**
  Yechan Park, Gyuhyeon Pak, and Euntai Kim
  International Conference on Control, Automation and Systems, Jeju, Korea, November 2024.

* **Robust Feature Tracking for Better Visual-Inertial System using Dynamic Mask**
  Gyuhyeon Pak, Taeyoung Kim, and Euntai Kim
  International Conference on Control, Automation and Systems, Busan, Korea, November 2022.

* **Metric Learning in Mini-batch for Robust 6-DoF Camera Relocalization in Outdoor Environments**
  Gyuhyeon Pak, Hongje Seong, and Euntai Kim
  International Conference on Ubiquitous Robots, Gangneung, Korea, July 2021.

* **공장 환경에서의 전역 설명자를 활용한 이동 로봇의 초기 위치 추정**
  박예찬, 박규현, 김은태
  제19회 한국로봇종합학술대회, 평창, 2024년 2월.

## License

The source code may be used as a reference for personal academic portfolio development.

Research papers, figures, videos, datasets, and other research materials remain the property of their respective authors and publishers.
