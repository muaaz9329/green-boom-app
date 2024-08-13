// Utils/dummyData.js

export const trainingScreenData = {
  isCategory: true,
  categoryData: [
    {id: 101, title: 'PDFs'},
    {id: 102, title: 'Videos'},
    {id: 103, title: 'Scripts'},
  ],
  title: 'Training Materials',
  isVideo: false,
  category: [
    {id: 101, title: 'PDFs'},
    {id: 102, title: 'Videos'},
    {id: 103, title: 'Scripts'},
  ],
  subCategory: [
    {
      id: 101,
      title: 'PDFs',
      script_media: [
        {
          id: 1001,
          title: 'Training Document 1',
          file: 'https://example.com/document1.pdf',
          file_type: 'pdf',
          icon_type: 'pdf',
        },
        {
          id: 1002,
          title: 'Training Document 2',
          file: 'https://example.com/document2.docx',
          file_type: 'word',
          icon_type: 'word',
        },
      ],
    },
    {
      id: 102,
      title: 'Videos',
      script_media: [
        {
          id: 1003,
          title: 'Training Video 1',
          videoUrl: 'https://example.com/video1.mp4',
          thumbnail: 'https://example.com/thumbnail1.jpg',
        },
        {
          id: 1004,
          title: 'Training Video 2',
          videoUrl: 'https://example.com/video2.mp4',
          thumbnail: 'https://example.com/thumbnail2.jpg',
        },
      ],
    },
    {
      id: 103,
      title: 'Scripts',
      script_media: [
        {
          id: 1005,
          title: 'Call Script 1',
          file: 'https://example.com/script1.txt',
          icon_type: 'call',
        },
        {
          id: 1006,
          title: 'Email Script 2',
          file: 'https://example.com/script2.txt',
          icon_type: 'email',
        },
      ],
    },
  ],
};
