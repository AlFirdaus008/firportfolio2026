const editingTags = [{ id: 1, name: "Video Editing", path: "/assets/logos/premiere.svg" }];

// Cover paths are temporary artwork; replace them with the owner's photos later.
const creativeVideo = (id, slug, title, videoId, summary, subDescription) => ({
  id,
  title,
  summary,
  description: summary,
  subDescription,
  href: `https://www.youtube.com/watch?v=${videoId}`,
  video: `https://www.youtube.com/watch?v=${videoId}`,
  image: `/assets/projects/creative/picture/placeholders/${slug}.svg`,
  gallery: [],
  tags: editingTags,
  category: "creative",
});

export const newCreativeProjects = [
  creativeVideo(7, "agustusan-2026", "Agustusan 2026: Upacara & Tasyakuran", "mY1wj27L8x8",
    "An event film covering Indonesia's 81st Independence Day ceremony and celebration with RT 08 RW 11 residents in Purwodadi, Malang.",
    ["The film follows the flag ceremony, cultural performances, tumpeng ceremony, and community celebration.", "The edit keeps the event's main moments in sequence, from the opening atmosphere to the closing highlights."]),
  creativeVideo(14, "maxi-turbo-recap", "Maxi Turbo Touring: Event Recap", "bN3o0gsta0g",
    "A recap of the Maxi Turbo Touring event in Malang, East Java.",
    ["An automotive event video published on my YouTube portfolio.", "The full recap can be watched here or opened directly on YouTube."]),
  creativeVideo(8, "agustusan-tasyakuran-2025", "Agustusan 2025: Tasyakuran RT 08", "6pDzyWZH1tE",
    "A video documenting the August 2025 community celebration in RT 08 RW 11, Purwodadi, Malang.",
    ["This film covers the community's tasyakuran event for the Independence Day celebrations.", "Published as part of my event video portfolio."]),
  creativeVideo(9, "agustusan-lomba-2025", "Agustusan 2025: Community Competitions", "fgeVQATTh0g",
    "An event video documenting the 2025 Independence Day competitions in RT 08 RW 11, Purwodadi, Malang.",
    ["A separate film from the 2025 tasyakuran, focused on the community competition event.", "The full video is available in the player above and on YouTube."]),
  creativeVideo(10, "pkk-mothers-day-2025", "PKK Mother's Day Gathering 2025", "0fwlF5tnOTs",
    "A community event video for the PKK RT 08 Mother's Day gathering, held on 7 December 2025 in Malang.",
    ["The video documents the PKK community gathering in RT 08.", "Published on my YouTube channel as part of my event video work."]),
  creativeVideo(11, "halal-bihalal-2025", "Halal Bi Halal RT 08 · 2025", "bn5yoIZ9T1o",
    "A video documenting the RT 08 Halal Bi Halal gathering in Malang in 2025.",
    ["An event film for the local community's Halal Bi Halal gathering.", "The completed video is available here and on my YouTube channel."]),
  creativeVideo(12, "agustusan-lomba-2024", "Agustusan 2024: Community Competitions", "STaIndormIs",
    "A Fir Production video covering Independence Day competitions for RT 08 RW 11 residents in Araya, Malang.",
    ["The film documents games, participants, and the atmosphere around the community's 2024 competitions.", "This competition video is separate from the fun-walk and carnival film already in the portfolio."]),
  creativeVideo(13, "community-recap", "RT 08 Community Activities: Recap", "RC2uJaXsy6k",
    "A Fir Production recap bringing together RT 08 community activities, local meetings, and neighborhood events in Purwodadi, Malang.",
    ["The video gathers several community activities into one recap, including neighborhood meetings and collective work.", "It also documents social and cultural activities organized by the residents."]),
];

export const creativeStories = {
  1: {
    title: "Spartan 2024: Competition Aftermovie",
    summary: "An event edit covering the Spartan competition in Malang.",
    description: "A competition aftermovie built from the main events, athlete footage, and finish-line moments at Spartan 2024.",
    subDescription: ["Selected and edited footage into a competition recap.", "Worked on pacing, music, sound, and color to connect the event's key moments."],
  },
  2: {
    title: "50 Years of Yamaha: Fazzio Touring Malang",
    summary: "A touring event film following the Fazzio ride through Malang.",
    description: "An event video for Yamaha's 50-year celebration and Fazzio touring in Malang.",
    subDescription: ["Edited the ride and community footage into an automotive event film.", "The related Turbo Matic touring video is available in the gallery; Maxi Turbo Touring has its own project entry."],
  },
  3: {
    summary: "A yearbook film for SMA Negeri 7 Malang's class of 2024.",
    description: "A cinematic yearbook for SMA Negeri 7 Malang's graduating class of 2024.",
    subDescription: ["Directed the concept and coordinated the crew and student cast during production.", "Oversaw the edit, color grading, and sound for the completed film."],
  },
  4: {
    title: "Agustusan 2024: Fun Walk & Carnival",
    summary: "A community event video covering the fun walk and carnival in Araya, Malang.",
    description: "A film documenting the community's Independence Day fun walk and carnival in Araya, Malang.",
    subDescription: ["Edited footage of the route, costumes, and gathering into an event highlight.", "This film is separate from the 2024 competition video in the Creative collection."],
  },
  5: {
    title: "Wedding Highlight · Malang",
    summary: "A wedding highlight combining ceremony and celebration footage.",
    description: "A wedding film bringing together the couple's ceremony and celebration in Malang.",
    subDescription: ["Edited the recorded moments into a wedding highlight.", "Worked on the sequence, music, and color across the finished film."],
  },
  6: {
    title: "Pekan Raya Mahasiswa 2025: Motion Teaser",
    summary: "A motion graphics teaser introducing the student fair at State University of Surabaya.",
    description: "An animated promotional video for Pekan Raya Mahasiswa 2025 at State University of Surabaya.",
    subDescription: ["Designed animated typography and transitions around the event information.", "Used After Effects for motion graphics, with music and sound effects in the final edit."],
  },
};
