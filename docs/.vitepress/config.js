export default {
  title: 'SIGNPASS 문서',
  description: 'SIGNPASS 공식 문서',
  lang: 'ko-KR',
  base: '/signpass_doc/', // GitHub 저장소 이름
  
  themeConfig: {
    nav: [
      { text: '홈', link: '/guide/' },
      { text: '사용방법', link: '/guide/' },
      { text: 'SIGNPASS', link: 'https://signpass.kr' }
    ],
    
    sidebar: {
      '/guide/': [
        {
          text: '시작하기',
          collapsed: true,
          items: [
            { text: '서비스 소개', link: '/guide/' },
            { text: '주요 특징', link: '/guide/features' },
            { text: '활용 사례', link: '/guide/use-cases' }
          ]
        },

        {
          text: '사용방법',
          collapsed: true,
          items: [
            { text: '회원가입 및 로그인', link: '/guide/signup-login' },
            { text: '계약서 템플릿 만들기', link: '/guide/template-create' },
            { text: '계약서 발송 및 작성', link: '/guide/send-and-write' },
            { text: '커스텀 계약서 만들기', link: '/guide/custom-contract' },
            { text: 'QR코드를 이용한 계약서 작성', link: '/guide/qr-contract' },
            { text: '계약서 대량 발송', link: '/guide/bulk-send' }
          ]
        },

      ]
    },
    
    footer: {
      message: 'SIGNPASS 공식문서',
      copyright: 'Copyright © 2025 SIGNPASS'
    },
    
    docFooter: {
      prev: '이전',
      next: '다음'
    },
    
    lastUpdatedText: '마지막 업데이트',
    
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '검색',
            buttonAriaLabel: '검색'
          },
          modal: {
            noResultsText: '검색 결과가 없습니다',
            resetButtonTitle: '검색 초기화',
            footer: {
              selectText: '선택',
              navigateText: '탐색'
            }
          }
        }
      }
    }
  }
}