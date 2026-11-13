# 제품 추가와 수정

제품별 파일(`leafyrics.ts`, `layerdeck.ts`)에서 홈 카드와 상세 페이지의 내용을 함께 관리합니다. 화면 코드를 수정하거나 필터 개수를 직접 입력할 필요는 없습니다.

1. 기존 제품 파일을 복사하고 고유한 `slug`와 `name`을 지정합니다.
2. `productType`을 `apps` 또는 `tools`로 지정합니다. `platforms`에는 실행 환경(`macOS`, `Windows`, `Web`, `iOS`, `Android` 등)을 별도로 입력합니다.
3. `icon`에 쓸 파일을 `public/apps/`에 넣습니다. 상세 페이지의 공유 이미지도 `public/og/<slug>.png`에 준비합니다.
4. 모든 문구에 `ko`, `en`, `ja`를 입력합니다. `App` 타입을 사용하면 빠진 번역을 빌드에서 확인할 수 있습니다.
5. `src/data/apps.ts`에서 새 제품을 import하고 `APPS` 배열에 추가합니다. 배열 순서가 표시 순서이며, 언어별 상세 페이지도 이 목록에서 생성됩니다.
6. `npm run build` 후 데스크톱·모바일에서 카드와 분류 필터를 확인합니다.

## 카드 문구

| 필드 | 용도 |
| --- | --- |
| `tagline` | 상세 페이지 제목 아래 문구. 카드의 기본 헤드라인으로도 사용 |
| `card.headline` | 데스크톱 카드에만 다른 헤드라인이 필요할 때 선택적으로 지정 |
| `card.description` | 데스크톱 카드 설명 |
| `card.compactDescription` | 모바일의 짧은 설명. 생략하면 `card.description` 사용 |
| `card.category` | 데스크톱 카드 하단의 용도 설명(예: 음악 · 가사). Apps/Tools 분류와 별개 |
| `description` | 상세 페이지의 긴 설명 |
| `status` | `in-development` 또는 `released`; 표시 문구는 공통 번역에서 관리 |

`Apps`와 `Tools`의 개수는 제품 목록에서 자동 집계됩니다. 등록 제품이 없는 유형은 필터에서 숨깁니다. `Web`은 별도 제품 유형이 아니라 실행 환경입니다. 기존 링크를 유지하기 위해 상세 주소는 도구도 `/apps/<slug>/`, 홈 목록 앵커는 `#apps`를 사용합니다.

## 화면 구성

- `ProductsSection.astro`: 데이터 현지화와 섹션 제목
- `products/ProductCatalog.tsx`: 필터 상태·자동 집계·목록 애니메이션
- `products/ProductCard.tsx`: 공통 카드와 반응형 표시
- `products/ProductFilters.tsx`: 필터 버튼·선택 표시
- `products/ProductTypeBadge.tsx`: Apps/Tools 배지
- `products/products.css`: 기존 브랜드 토큰을 사용하는 스타일

카드는 서버에서 HTML로 렌더링되므로 JavaScript를 끈 상태에서도 설명과 상세 페이지 링크를 사용할 수 있습니다. 필터는 클라이언트 초기화 후 활성화됩니다.
