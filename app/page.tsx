import Image from "next/image";
import Navbar from "@/components/Navbar";

const manuscripts = [
  {
    title: "G2S-ICP SLAM: Geometry-aware Gaussian Splatting ICP SLAM",
    authors: ["Gyuhyeon Pak, et al."],
    status: "Preprint",
    description:
      "A geometry-aware RGB-D Gaussian Splatting SLAM framework designed to improve rendered depth and normal consistency.",
    paperUrl: "https://arxiv.org/abs/2507.18344",
    codeUrl: "#",
  },
];

const journalPublications = [
  {
    title: "VIGS SLAM: IMU-Based Large-Scale RGB-D 3-D Gaussian Splatting SLAM",
    authors: ["Gyuhyeon Pak", "Euntai Kim"],
    venue: "IEEE Transactions on Instrumentation and Measurement",
    details: "vol. 75, pp. 5010510–5010520",
    date: "May 2026",
    type: "Journal Article",
    paperUrl: "https://ieeexplore.ieee.org/document/11520407/",
    codeUrl: "https://github.com/ghPak1002/VIGS_SLAM",
  },
  {
    title:
      "GRIL-Calib: Targetless Ground Robot IMU-LiDAR Extrinsic Calibration Method using Ground Plane Motion Constraints",
    authors: ["TaeYoung Kim", "Gyuhyeon Pak", "Euntai Kim"],
    venue: "IEEE Robotics and Automation Letters",
    details: "vol. 9, no. 6, pp. 5409–5416",
    date: "June 2024",
    type: "Journal Article",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10506583",
    codeUrl: "#",
  },
];

const conferencePublications = [
  {
    title:
      "RE-TRIP: Reflectivity Instance Augmented Triangle Descriptor for 3D Place Recognition",
    authors: ["Yechan Park", "Gyuhyeon Pak", "Euntai Kim"],
    venue: "2025 IEEE International Conference on Robotics and Automation",
    abbreviation: "ICRA 2025",
    location: "Atlanta, USA",
    date: "May 2025",
    type: "International Conference",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11128417",
  },
  {
    title:
      "Robust Rotation Initialization for LVI Localization Via 2D-3D Line Matching",
    authors: ["Gyuhyeon Pak", "Haemin Cho", "Euntai Kim"],
    venue:
      "International Conference on Control, Automation and Systems",
    abbreviation: "ICCAS 2025",
    location: "Incheon, Korea",
    date: "November 2025",
    type: "International Conference",
    paperUrl: "#",
  },
  {
    title:
      "Leveraging 2D Semantic Information for Dynamic Object Removal in Static 3D Point Cloud Map Construction",
    authors: ["Yechan Park", "Gyuhyeon Pak", "Euntai Kim"],
    venue:
      "24th International Conference on Control, Automation and Systems",
    abbreviation: "ICCAS 2024",
    location: "Jeju, Korea",
    date: "November 2024",
    type: "International Conference",
    paperUrl: "#",
  },
  {
    title:
      "Robust Feature Tracking for Better Visual-Inertial System using Dynamic Mask",
    authors: ["Gyuhyeon Pak", "Taeyoung Kim", "Euntai Kim"],
    venue:
      "22nd International Conference on Control, Automation and Systems",
    abbreviation: "ICCAS 2022",
    location: "Busan, Korea",
    date: "November 2022",
    type: "International Conference",
    paperUrl: "#",
  },
  {
    title:
      "Metric Learning in Mini-batch for Robust 6-DoF Camera Relocalization in Outdoor Environments",
    authors: ["Gyuhyeon Pak", "Hongje Seong", "Euntai Kim"],
    venue: "18th International Conference on Ubiquitous Robots",
    abbreviation: "UR 2021",
    location: "Gangneung, Korea",
    date: "July 2021",
    type: "International Conference",
    paperUrl: "#",
  },
  {
    title:
      "공장 환경에서의 전역 설명자를 활용한 이동 로봇의 초기 위치 추정",
    authors: ["박예찬", "박규현", "김은태"],
    venue: "제19회 한국로봇종합학술대회",
    abbreviation: "KRoC 2024",
    location: "평창, 대한민국",
    date: "February 2024",
    type: "Domestic Conference",
    paperUrl: "#",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-[#f7f9fb] text-[#22313f]">
      <section 
          id="home"
          className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 py-24 pt-32 md:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#547a95]">
            Robotics · Spatial AI · 3D Vision
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Gyuhyeon Pak
          </h1>

          <h2 className="mt-6 text-2xl font-medium text-[#4f6474] sm:text-3xl">
            Graduate Researcher in Visual-Inertial SLAM and Gaussian Splatting
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#647786]">
            I develop robust spatial perception systems for robotics, focusing
            on visual-inertial SLAM, Gaussian Splatting, and LiDAR localization.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#publications"
              className="rounded-full bg-[#547a95] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#466b84]"
            >
              Publications
            </a>

            <a
              href="#projects"
              className="rounded-full border border-[#cfd9e1] px-6 py-3 font-semibold text-[#22313f] transition hover:border-[#9eb1bf] hover:bg-white"
            >
              Projects
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "Visual-Inertial SLAM",
              "Gaussian Splatting",
              "LiDAR-Visual-Inertial Localization",
            ].map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-[#dde5eb] bg-white px-4 py-2 text-sm text-[#4f6474]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-[#dce8f2]" />
            <div className="overflow-hidden rounded-[2rem] border border-[#d8e1e8] bg-white p-3 shadow-[0_24px_70px_rgba(58,78,92,0.15)]">
              <Image
                src="/profile.jpg"
                alt="Gyuhyeon Pak"
                width={420}
                height={520}
                className="h-[430px] w-[340px] rounded-[1.5rem] object-cover object-center sm:h-[500px] sm:w-[390px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
          id="about"
          className="border-t border-[#e3e9ee] bg-[#eef3f6] px-6 py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#547a95]">
                About
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Building reliable spatial perception systems for robotics
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-[#647786]">
              <p>
                I am a graduate researcher working on robust simultaneous localization and mapping
                for autonomous robots. My research focuses on visual-inertial SLAM,
                Gaussian Splatting, and LiDAR localization.
              </p>

              <p>
                I am particularly interested in combining geometric estimation,
                sensor fusion, and Gaussian Splatting 3D reconstruction to develop accurate and
                reliable spatial perception systems.
              </p>

            </div>
          </div>
      </section>
      <section id="research" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#547a95]">
              Research
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Research Interests
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#647786]">
              My research explores geometric estimation, 3D scene representation,
              and robust localization for real-world robotic systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Visual-Inertial SLAM",
                description:
                  "Geometry-based tracking, IMU preintegration, factor graph optimization, and robust localization in large-scale environments.",
                topics: [
                  "IMU Preintegration",
                  "Factor Graph",
                  "Geometry Tracking",
                  "Pose Estimation",
                ],
              },
              {
                title: "Gaussian Splatting",
                description:
                  "Explicit 3D representation for dense mapping, rendered geometry consistency, and real-time robotic perception.",
                topics: [
                  "3D Gaussian Splatting",
                  "Depth Consistency",
                  "Normal Consistency",
                  "Dense Mapping",
                ],
              },
              {
                title: "LiDAR Localization",
                description:
                  "Semantic-aware scan matching, NDT-based localization, sensor fusion, and robust pose estimation.",
                topics: [
                  "NDT",
                  "GICP",
                  "Semantic Localization",
                  "UKF",
                ],
              },
              // {
              //   title: "Long-Term Mapping",
              //   description:
              //     "Persistent map maintenance, dynamic object suppression, repeated observations, and environmental change handling.",
              //   topics: [
              //     "Map Update",
              //     "Dynamic Suppression",
              //     "Persistent Structures",
              //     "Multi-Session Mapping",
              //   ],
              // },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#dde5eb] bg-white p-8 shadow-[0_12px_36px_rgba(58,78,92,0.07)] transition hover:-translate-y-1 hover:border-[#7f9db1]"
              >
                <h3 className="text-2xl font-semibold text-[#22313f]">{item.title}</h3>

                <p className="mt-4 leading-7 text-[#647786]">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-[#edf2f5] px-3 py-1 text-sm text-[#4f6474]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="publications"
        className="border-t border-[#e3e9ee] bg-[#eef3f6] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#547a95]">
              Publications
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Publications
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#647786]">
              Journal articles and conference papers on Robotics and Spatial AI.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#journal-publications"
              className="rounded-full border border-[#cfd9e1] px-6 py-3 font-semibold text-[#22313f] transition hover:border-[#9eb1bf] hover:bg-white"
            >
              Journal Publications
            </a>

            <a
              href="#conference-publications"
              className="rounded-full border border-[#cfd9e1] px-6 py-3 font-semibold text-[#22313f] transition hover:border-[#9eb1bf] hover:bg-white"
            >
              Conference Publications
            </a>

            <a
              href="#ongoing-research"
              className="rounded-full border border-[#cfd9e1] px-6 py-3 font-semibold text-[#22313f] transition hover:border-[#9eb1bf] hover:bg-white"
            >
              Ongoing Research
            </a>
          </div>

          {/* Journal Publications */}
          <div 
          id="journal-publications"
          className="mt-16">
            <div className="flex items-end justify-between border-b border-[#dde5eb] pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#547a95]">
                  Peer-Reviewed
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#22313f]">
                  Journal Publications
                </h3>
              </div>

              <span className="text-sm text-[#7e909d]">
                {journalPublications.length} publication
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {journalPublications.map((publication) => (
                <article
                  key={publication.title}
                  className="rounded-3xl border border-[#dde5eb] bg-white p-7 shadow-[0_10px_30px_rgba(58,78,92,0.06)] transition hover:border-[#7f9db1]"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#547a95]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#547a95]">
                      {publication.type}
                    </span>

                    <span className="text-sm text-[#7e909d]">
                      {publication.date}
                    </span>
                  </div>

                  <h4 className="mt-4 text-xl font-semibold leading-snug text-[#22313f]">
                    {publication.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[#647786]">
                    {publication.authors.map((author, index) => (
                      <span key={author}>
                        <span
                          className={
                            author === "Gyuhyeon Pak"
                              ? "font-semibold text-[#547a95]"
                              : ""
                          }
                        >
                          {author}
                        </span>

                        {index < publication.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>

                  <p className="mt-4 font-medium text-[#4f6474]">
                    {publication.venue}
                  </p>

                  <p className="mt-1 text-sm text-[#7e909d]">
                    {publication.details}, {publication.date}
                  </p>

                  {(publication.paperUrl !== "#" || publication.codeUrl !== "#") && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {publication.paperUrl !== "#" && (
                        <a
                          href={publication.paperUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-lg border border-[#cfd9e1] px-4 py-2 text-sm font-semibold text-[#22313f] transition hover:border-[#547a95] hover:text-[#547a95]"
                        >
                          View Paper
                        </a>
                      )}

                      {publication.codeUrl !== "#" && (
                        <a
                          href={publication.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-lg border border-[#cfd9e1] px-4 py-2 text-sm font-semibold text-[#22313f] transition hover:border-[#547a95] hover:text-[#547a95]"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Conference Publications */}
          <div 
          id="conference-publications"
          className="mt-16">
            <div className="flex items-end justify-between border-b border-[#dde5eb] pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#547a95]">
                  Proceedings
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#22313f]">
                  Conference Publications
                </h3>
              </div>

              <span className="text-sm text-[#7e909d]">
                {conferencePublications.length} publications
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {conferencePublications.map((publication) => (
                <article
                  key={publication.title}
                  className="rounded-3xl border border-[#dde5eb] bg-white p-7 shadow-[0_10px_30px_rgba(58,78,92,0.06)] transition hover:border-[#7f9db1]"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#edf2f5] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#4f6474]">
                      {publication.type}
                    </span>

                    <span className="rounded-full bg-[#547a95]/10 px-3 py-1 text-xs font-semibold text-[#547a95]">
                      {publication.abbreviation}
                    </span>

                    <span className="text-sm text-[#7e909d]">
                      {publication.date}
                    </span>
                  </div>

                  <h4 className="mt-4 text-xl font-semibold leading-snug text-[#22313f]">
                    {publication.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[#647786]">
                    {publication.authors.map((author, index) => (
                      <span key={author}>
                        <span
                          className={
                            author === "Gyuhyeon Pak" || author === "박규현"
                              ? "font-semibold text-[#547a95]"
                              : ""
                          }
                        >
                          {author}
                        </span>

                        {index < publication.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>

                  <p className="mt-4 font-medium text-[#4f6474]">
                    {publication.venue}
                  </p>

                  <p className="mt-1 text-sm text-[#7e909d]">
                    {publication.location} · {publication.date}
                  </p>

                  {publication.paperUrl !== "#" && (
                    <div className="mt-6">
                      <a
                        href={publication.paperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-lg border border-[#cfd9e1] px-4 py-2 text-sm font-semibold text-[#22313f] transition hover:border-[#547a95] hover:text-[#547a95]"
                      >
                        View Paper
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Manuscripts */}
          <div 
          id="ongoing-research"
          className="mt-16">
            <div className="border-b border-[#dde5eb] pb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#547a95]">
                Ongoing Research
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#22313f]">
                Manuscripts
              </h3>
            </div>

            <div className="mt-6 space-y-5">
              {manuscripts.map((manuscript) => (
                <article
                  key={manuscript.title}
                  className="rounded-3xl border border-[#dde5eb] bg-white p-7 shadow-[0_10px_30px_rgba(58,78,92,0.06)]"
                >
                  <span className="rounded-full bg-[#f4ead8] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#956f32]">
                    {manuscript.status}
                  </span>

                  <h4 className="mt-5 text-xl font-semibold leading-snug text-[#22313f]">
                    {manuscript.title}
                  </h4>

                  <p className="mt-3 text-sm text-[#647786]">
                    {manuscript.authors.join(", ")}
                  </p>

                  <p className="mt-5 leading-7 text-[#647786]">
                    {manuscript.description}
                  </p>

                  {manuscript.paperUrl !== "#" && (
                    <div className="mt-6">
                      <a
                        href={manuscript.paperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-lg border border-[#cfd9e1] px-4 py-2 text-sm font-semibold text-[#22313f] transition hover:border-[#547a95] hover:text-[#547a95]"
                      >
                        View Paper
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#547a95]">
              Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Research Projects
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#647786]">
              Government-funded and industry-sponsored research projects in robotic
              perception, autonomous navigation, depth sensing, and mobile
              manipulation.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {[
              {
                title:
                  "Core Technology Development for 5G Edge-Based Mobile Manipulator Transportation and Manipulation",
                koreanTitle:
                  "5G 엣지 기반 이송·조작을 위한 모바일 매니퓰레이터 핵심기술 개발",
                period: "Apr. 2022 – Dec. 2025",
                organization:
                  "Ministry of Science and ICT / Korea Electronics Technology Institute",
                koreanOrganization:
                  "과학기술정보통신부 / 전자부품연구원",
                description:
                  "A research project focused on core technologies for mobile manipulators performing transportation and manipulation tasks through 5G edge computing and intelligent robotic perception.",
                topics: [
                  "Mobile Manipulator",
                  "5G Edge Computing",
                  "Robot Perception",
                  "Autonomous Navigation",
                ],
              },
              {
                title:
                  "Deep Learning-Based Image Retrieval Using ToF Depth Sensors",
                koreanTitle:
                  "ToF Depth 센서를 이용한 딥러닝 기반 Image Retrieval 기술 개발",
                period: "May 2021 – Dec. 2021",
                organization: "LG Electronics",
                koreanOrganization: "LG전자(주)",
                description:
                  "An industry-sponsored project investigating deep learning-based image retrieval using geometric and spatial information acquired from Time-of-Flight depth sensors.",
                topics: [
                  "ToF Depth Sensor",
                  "Image Retrieval",
                  "Deep Learning",
                  "Depth Representation",
                ],
              },
              {
                title:
                  "Forward and Downward SLAM Using ToF Depth Sensors",
                koreanTitle: "ToF Depth 센서 기반 전·하방 SLAM 기술 개발",
                period: "Apr. 2020 – Feb. 2021",
                organization: "LG Electronics",
                koreanOrganization: "LG전자(주)",
                description:
                  "An industry-sponsored SLAM project using forward-facing and downward-facing ToF depth sensors for robust localization and spatial mapping.",
                topics: [
                  "ToF SLAM",
                  "Depth Sensing",
                  "Robot Localization",
                  "3D Mapping",
                ],
              },
              {
                title:
                  "AI-Converged Autonomous Navigation for Agile Robot Motion in Dense Crowds",
                koreanTitle:
                  "밀집군중 사이 민첩기동이 가능한 인공지능 융합 실내외 로봇 자율주행 기술개발",
                period: "Apr. 2019 – Dec. 2022",
                organization:
                  "Ministry of Trade, Industry and Energy / Korea Electronics Technology Institute",
                koreanOrganization:
                  "산업통상자원부 / 전자부품연구원",
                description:
                  "A government-funded project developing AI-integrated autonomous navigation technologies that enable indoor and outdoor robots to move safely and agilely through densely crowded environments.",
                topics: [
                  "Autonomous Navigation",
                  "Crowd Navigation",
                  "Mobile Robotics",
                  "AI-Based Perception",
                ],
              },
            ].map((project, index) => (
              <article
                key={project.title}
                className="group grid gap-6 rounded-3xl border border-[#dde5eb] bg-white p-8 shadow-[0_12px_36px_rgba(58,78,92,0.07)] transition hover:-translate-y-1 hover:border-[#7f9db1] md:grid-cols-[160px_1fr]"
              >
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#547a95]">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-4 text-sm leading-6 text-[#7e909d]">
                    {project.period}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold leading-snug text-[#22313f]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#7e909d]">
                    {project.koreanTitle}
                  </p>

                  <div className="mt-5 border-l-2 border-[#8ea9ba] pl-4">
                    <p className="font-medium text-[#4f6474]">
                      {project.organization}
                    </p>

                    <p className="mt-1 text-sm text-[#7e909d]">
                      {project.koreanOrganization}
                    </p>
                  </div>

                  <p className="mt-6 leading-7 text-[#647786]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-[#cfd9e1] bg-white px-3 py-1 text-sm text-[#4f6474]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}