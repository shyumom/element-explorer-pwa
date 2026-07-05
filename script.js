const elements = [
  {
    "n": 1,
    "s": "H",
    "ko": "수소",
    "en": "Hydrogen",
    "cat": "비금속",
    "group": 1,
    "period": 1,
    "mass": "1.008",
    "state": "기체",
    "desc": "우주에서 가장 많은 원소예요. 아주 가볍고 물을 이루는 중요한 원소예요.",
    "fact": "수소와 산소가 만나면 물을 만들 수 있어요.",
    "image": "element-images/001-h.svg"
  },
  {
    "n": 2,
    "s": "He",
    "ko": "헬륨",
    "en": "Helium",
    "cat": "비활성 기체",
    "group": 18,
    "period": 1,
    "mass": "4.0026",
    "state": "기체",
    "desc": "아주 가볍고 잘 반응하지 않는 기체예요. 풍선을 띄우는 데 쓰이기도 해요.",
    "fact": "헬륨을 조금 마시면 목소리가 높게 들릴 수 있지만 따라 하면 위험해요.",
    "image": "element-images/002-he.svg"
  },
  {
    "n": 3,
    "s": "Li",
    "ko": "리튬",
    "en": "Lithium",
    "cat": "알칼리 금속",
    "group": 1,
    "period": 2,
    "mass": "6.94",
    "state": "고체",
    "desc": "가장 가벼운 금속이에요. 충전 배터리에 많이 쓰여요.",
    "fact": "스마트폰, 노트북, 태블릿 배터리와 관련이 깊어요.",
    "image": "element-images/003-li.svg"
  },
  {
    "n": 4,
    "s": "Be",
    "ko": "베릴륨",
    "en": "Beryllium",
    "cat": "알칼리 토금속",
    "group": 2,
    "period": 2,
    "mass": "9.0122",
    "state": "고체",
    "desc": "가볍고 단단한 금속이에요. 특별한 산업 분야에서 쓰여요.",
    "fact": "우주선이나 항공 장비에 쓰이기도 해요.",
    "image": "element-images/004-be.svg"
  },
  {
    "n": 5,
    "s": "B",
    "ko": "붕소",
    "en": "Boron",
    "cat": "준금속",
    "group": 13,
    "period": 2,
    "mass": "10.81",
    "state": "고체",
    "desc": "금속과 비금속의 성질을 조금씩 가진 원소예요.",
    "fact": "튼튼한 유리나 세제, 식물 영양과 관련이 있어요.",
    "image": "element-images/005-b.svg"
  },
  {
    "n": 6,
    "s": "C",
    "ko": "탄소",
    "en": "Carbon",
    "cat": "비금속",
    "group": 14,
    "period": 2,
    "mass": "12.011",
    "state": "고체",
    "desc": "생명체를 이루는 아주 중요한 원소예요. 우리 몸에도 많이 들어 있어요.",
    "fact": "다이아몬드와 연필심의 흑연은 모두 탄소로 이루어져 있어요.",
    "image": "element-images/006-c.svg"
  },
  {
    "n": 7,
    "s": "N",
    "ko": "질소",
    "en": "Nitrogen",
    "cat": "비금속",
    "group": 15,
    "period": 2,
    "mass": "14.007",
    "state": "기체",
    "desc": "공기 속에 가장 많이 들어 있는 기체예요.",
    "fact": "우리가 마시는 공기의 대부분은 질소예요.",
    "image": "element-images/007-n.svg"
  },
  {
    "n": 8,
    "s": "O",
    "ko": "산소",
    "en": "Oxygen",
    "cat": "비금속",
    "group": 16,
    "period": 2,
    "mass": "15.999",
    "state": "기체",
    "desc": "사람과 동물이 숨 쉬는 데 꼭 필요한 원소예요.",
    "fact": "불이 잘 타려면 산소가 필요해요.",
    "image": "element-images/008-o.svg"
  },
  {
    "n": 9,
    "s": "F",
    "ko": "플루오린",
    "en": "Fluorine",
    "cat": "할로젠",
    "group": 17,
    "period": 2,
    "mass": "18.998",
    "state": "기체",
    "desc": "반응성이 매우 큰 원소예요. 안전하게 다루어야 해요.",
    "fact": "치약의 불소 성분과 관련이 있어요.",
    "image": "element-images/009-f.svg"
  },
  {
    "n": 10,
    "s": "Ne",
    "ko": "네온",
    "en": "Neon",
    "cat": "비활성 기체",
    "group": 18,
    "period": 2,
    "mass": "20.180",
    "state": "기체",
    "desc": "잘 반응하지 않는 기체예요. 빛나는 간판에 쓰여요.",
    "fact": "네온사인은 알록달록한 빛을 낼 수 있어요.",
    "image": "element-images/010-ne.svg"
  },
  {
    "n": 11,
    "s": "Na",
    "ko": "나트륨",
    "en": "Sodium",
    "cat": "알칼리 금속",
    "group": 1,
    "period": 3,
    "mass": "22.990",
    "state": "고체",
    "desc": "소금과 관련 있는 원소예요. 물과 만나면 매우 세게 반응할 수 있어요.",
    "fact": "소금은 나트륨과 염소가 만나 만들어져요.",
    "image": "element-images/011-na.svg"
  },
  {
    "n": 12,
    "s": "Mg",
    "ko": "마그네슘",
    "en": "Magnesium",
    "cat": "알칼리 토금속",
    "group": 2,
    "period": 3,
    "mass": "24.305",
    "state": "고체",
    "desc": "가볍고 은빛이 나는 금속이에요. 우리 몸에도 필요한 원소예요.",
    "fact": "마그네슘은 밝은 빛을 내며 탈 수 있어요.",
    "image": "element-images/012-mg.svg"
  },
  {
    "n": 13,
    "s": "Al",
    "ko": "알루미늄",
    "en": "Aluminium",
    "cat": "전이후 금속",
    "group": 13,
    "period": 3,
    "mass": "26.982",
    "state": "고체",
    "desc": "가볍고 녹이 잘 슬지 않아 생활 속에서 많이 쓰이는 금속이에요.",
    "fact": "음료수 캔, 알루미늄 포일, 창틀 등에 쓰여요.",
    "image": "element-images/013-al.svg"
  },
  {
    "n": 14,
    "s": "Si",
    "ko": "규소",
    "en": "Silicon",
    "cat": "준금속",
    "group": 14,
    "period": 3,
    "mass": "28.085",
    "state": "고체",
    "desc": "모래와 유리, 컴퓨터 칩과 관련 있는 원소예요.",
    "fact": "반도체를 만드는 데 매우 중요한 원소예요.",
    "image": "element-images/014-si.svg"
  },
  {
    "n": 15,
    "s": "P",
    "ko": "인",
    "en": "Phosphorus",
    "cat": "비금속",
    "group": 15,
    "period": 3,
    "mass": "30.974",
    "state": "고체",
    "desc": "뼈와 세포에 중요한 원소예요. 식물이 자라는 데도 필요해요.",
    "fact": "비료와 성냥에 관련이 있어요.",
    "image": "element-images/015-p.svg"
  },
  {
    "n": 16,
    "s": "S",
    "ko": "황",
    "en": "Sulfur",
    "cat": "비금속",
    "group": 16,
    "period": 3,
    "mass": "32.06",
    "state": "고체",
    "desc": "노란색으로 보이는 경우가 많은 원소예요.",
    "fact": "화산 근처에서 나는 독특한 냄새와 관련이 있어요.",
    "image": "element-images/016-s.svg"
  },
  {
    "n": 17,
    "s": "Cl",
    "ko": "염소",
    "en": "Chlorine",
    "cat": "할로젠",
    "group": 17,
    "period": 3,
    "mass": "35.45",
    "state": "기체",
    "desc": "물을 소독하는 데 쓰이기도 하는 원소예요.",
    "fact": "나트륨과 만나면 우리가 먹는 소금이 돼요.",
    "image": "element-images/017-cl.svg"
  },
  {
    "n": 18,
    "s": "Ar",
    "ko": "아르곤",
    "en": "Argon",
    "cat": "비활성 기체",
    "group": 18,
    "period": 3,
    "mass": "39.948",
    "state": "기체",
    "desc": "공기 속에 조금 들어 있는 잘 반응하지 않는 기체예요.",
    "fact": "전구나 용접 작업에 쓰이기도 해요.",
    "image": "element-images/018-ar.svg"
  },
  {
    "n": 19,
    "s": "K",
    "ko": "칼륨",
    "en": "Potassium",
    "cat": "알칼리 금속",
    "group": 1,
    "period": 4,
    "mass": "39.098",
    "state": "고체",
    "desc": "우리 몸과 식물에 중요한 원소예요.",
    "fact": "바나나에는 칼륨이 들어 있어요.",
    "image": "element-images/019-k.svg"
  },
  {
    "n": 20,
    "s": "Ca",
    "ko": "칼슘",
    "en": "Calcium",
    "cat": "알칼리 토금속",
    "group": 2,
    "period": 4,
    "mass": "40.078",
    "state": "고체",
    "desc": "뼈와 이를 튼튼하게 하는 데 중요한 원소예요.",
    "fact": "우유, 멸치, 치즈와 관련이 깊어요.",
    "image": "element-images/020-ca.svg"
  },
  {
    "n": 21,
    "s": "Sc",
    "ko": "스칸듐",
    "en": "Scandium",
    "cat": "전이 금속",
    "group": 3,
    "period": 4,
    "mass": "44.956",
    "state": "고체",
    "desc": "가볍고 강한 합금을 만드는 데 쓰이는 금속이에요.",
    "fact": "알루미늄 합금을 더 강하게 만들 때 쓰이기도 해요.",
    "image": "element-images/021-sc.svg"
  },
  {
    "n": 22,
    "s": "Ti",
    "ko": "타이타늄",
    "en": "Titanium",
    "cat": "전이 금속",
    "group": 4,
    "period": 4,
    "mass": "47.867",
    "state": "고체",
    "desc": "가볍고 튼튼하며 녹이 잘 슬지 않는 금속이에요.",
    "fact": "비행기, 안경테, 인공 뼈 등에 쓰여요.",
    "image": "element-images/022-ti.svg"
  },
  {
    "n": 23,
    "s": "V",
    "ko": "바나듐",
    "en": "Vanadium",
    "cat": "전이 금속",
    "group": 5,
    "period": 4,
    "mass": "50.942",
    "state": "고체",
    "desc": "강한 금속을 만드는 데 도움을 주는 원소예요.",
    "fact": "강철을 더 튼튼하게 만들 때 쓰여요.",
    "image": "element-images/023-v.svg"
  },
  {
    "n": 24,
    "s": "Cr",
    "ko": "크로뮴",
    "en": "Chromium",
    "cat": "전이 금속",
    "group": 6,
    "period": 4,
    "mass": "51.996",
    "state": "고체",
    "desc": "반짝이고 녹이 잘 슬지 않게 도와주는 금속이에요.",
    "fact": "스테인리스강에 들어가 녹을 막는 데 도움을 줘요.",
    "image": "element-images/024-cr.svg"
  },
  {
    "n": 25,
    "s": "Mn",
    "ko": "망가니즈",
    "en": "Manganese",
    "cat": "전이 금속",
    "group": 7,
    "period": 4,
    "mass": "54.938",
    "state": "고체",
    "desc": "철을 더 튼튼하게 만드는 데 쓰이는 금속이에요.",
    "fact": "건전지와 강철 제조에 쓰여요.",
    "image": "element-images/025-mn.svg"
  },
  {
    "n": 26,
    "s": "Fe",
    "ko": "철",
    "en": "Iron",
    "cat": "전이 금속",
    "group": 8,
    "period": 4,
    "mass": "55.845",
    "state": "고체",
    "desc": "건물, 다리, 자동차 등에 많이 쓰이는 튼튼한 금속이에요.",
    "fact": "우리 피 속에도 철과 관련된 성분이 있어요.",
    "image": "element-images/026-fe.svg"
  },
  {
    "n": 27,
    "s": "Co",
    "ko": "코발트",
    "en": "Cobalt",
    "cat": "전이 금속",
    "group": 9,
    "period": 4,
    "mass": "58.933",
    "state": "고체",
    "desc": "파란색 안료와 배터리 등에 쓰이는 금속이에요.",
    "fact": "코발트블루라는 예쁜 파란색 이름과 관련이 있어요.",
    "image": "element-images/027-co.svg"
  },
  {
    "n": 28,
    "s": "Ni",
    "ko": "니켈",
    "en": "Nickel",
    "cat": "전이 금속",
    "group": 10,
    "period": 4,
    "mass": "58.693",
    "state": "고체",
    "desc": "단단하고 녹이 잘 슬지 않는 금속이에요.",
    "fact": "동전, 도금, 배터리 등에 쓰여요.",
    "image": "element-images/028-ni.svg"
  },
  {
    "n": 29,
    "s": "Cu",
    "ko": "구리",
    "en": "Copper",
    "cat": "전이 금속",
    "group": 11,
    "period": 4,
    "mass": "63.546",
    "state": "고체",
    "desc": "전기가 잘 통하는 붉은빛 금속이에요.",
    "fact": "전선에 구리가 많이 쓰여요.",
    "image": "element-images/029-cu.svg"
  },
  {
    "n": 30,
    "s": "Zn",
    "ko": "아연",
    "en": "Zinc",
    "cat": "전이 금속",
    "group": 12,
    "period": 4,
    "mass": "65.38",
    "state": "고체",
    "desc": "철이 녹스는 것을 막는 데 쓰이는 금속이에요.",
    "fact": "아연을 입힌 철판은 녹이 덜 슬어요.",
    "image": "element-images/030-zn.svg"
  },
  {
    "n": 31,
    "s": "Ga",
    "ko": "갈륨",
    "en": "Gallium",
    "cat": "전이후 금속",
    "group": 13,
    "period": 4,
    "mass": "69.723",
    "state": "고체",
    "desc": "손의 따뜻함에도 녹을 수 있을 정도로 녹는점이 낮은 금속이에요.",
    "fact": "전자 부품과 LED에 쓰이기도 해요.",
    "image": "element-images/031-ga.svg"
  },
  {
    "n": 32,
    "s": "Ge",
    "ko": "저마늄",
    "en": "Germanium",
    "cat": "준금속",
    "group": 14,
    "period": 4,
    "mass": "72.630",
    "state": "고체",
    "desc": "금속과 비금속의 성질을 함께 가진 원소예요.",
    "fact": "반도체와 광섬유 기술에 쓰여요.",
    "image": "element-images/032-ge.svg"
  },
  {
    "n": 33,
    "s": "As",
    "ko": "비소",
    "en": "Arsenic",
    "cat": "준금속",
    "group": 15,
    "period": 4,
    "mass": "74.922",
    "state": "고체",
    "desc": "독성이 있어 매우 조심해야 하는 원소예요.",
    "fact": "옛날에는 독과 관련된 이야기에도 자주 등장했어요.",
    "image": "element-images/033-as.svg"
  },
  {
    "n": 34,
    "s": "Se",
    "ko": "셀레늄",
    "en": "Selenium",
    "cat": "비금속",
    "group": 16,
    "period": 4,
    "mass": "78.971",
    "state": "고체",
    "desc": "아주 적은 양은 우리 몸에 필요하지만 너무 많으면 해로워요.",
    "fact": "빛을 전기로 바꾸는 장치와 관련이 있어요.",
    "image": "element-images/034-se.svg"
  },
  {
    "n": 35,
    "s": "Br",
    "ko": "브로민",
    "en": "Bromine",
    "cat": "할로젠",
    "group": 17,
    "period": 4,
    "mass": "79.904",
    "state": "액체",
    "desc": "상온에서 액체인 몇 안 되는 원소예요.",
    "fact": "붉은 갈색 액체로, 직접 만지면 위험해요.",
    "image": "element-images/035-br.svg"
  },
  {
    "n": 36,
    "s": "Kr",
    "ko": "크립톤",
    "en": "Krypton",
    "cat": "비활성 기체",
    "group": 18,
    "period": 4,
    "mass": "83.798",
    "state": "기체",
    "desc": "잘 반응하지 않는 기체예요.",
    "fact": "특수 조명과 플래시 램프에 쓰이기도 해요.",
    "image": "element-images/036-kr.svg"
  },
  {
    "n": 37,
    "s": "Rb",
    "ko": "루비듐",
    "en": "Rubidium",
    "cat": "알칼리 금속",
    "group": 1,
    "period": 5,
    "mass": "85.468",
    "state": "고체",
    "desc": "물과 매우 잘 반응하는 부드러운 금속이에요.",
    "fact": "원자시계 연구에 쓰이기도 해요.",
    "image": "element-images/037-rb.svg"
  },
  {
    "n": 38,
    "s": "Sr",
    "ko": "스트론튬",
    "en": "Strontium",
    "cat": "알칼리 토금속",
    "group": 2,
    "period": 5,
    "mass": "87.62",
    "state": "고체",
    "desc": "불꽃놀이에서 붉은색을 내는 데 쓰이는 원소예요.",
    "fact": "빨간 불꽃 색과 관련이 깊어요.",
    "image": "element-images/038-sr.svg"
  },
  {
    "n": 39,
    "s": "Y",
    "ko": "이트륨",
    "en": "Yttrium",
    "cat": "전이 금속",
    "group": 3,
    "period": 5,
    "mass": "88.906",
    "state": "고체",
    "desc": "특수한 빛과 전자제품에 쓰이는 금속이에요.",
    "fact": "LED와 디스플레이 기술에 쓰이기도 해요.",
    "image": "element-images/039-y.svg"
  },
  {
    "n": 40,
    "s": "Zr",
    "ko": "지르코늄",
    "en": "Zirconium",
    "cat": "전이 금속",
    "group": 4,
    "period": 5,
    "mass": "91.224",
    "state": "고체",
    "desc": "열과 부식에 강한 금속이에요.",
    "fact": "원자력 발전소의 재료로 쓰이기도 해요.",
    "image": "element-images/040-zr.svg"
  },
  {
    "n": 41,
    "s": "Nb",
    "ko": "나이오븀",
    "en": "Niobium",
    "cat": "전이 금속",
    "group": 5,
    "period": 5,
    "mass": "92.906",
    "state": "고체",
    "desc": "강한 합금과 초전도 재료에 쓰이는 금속이에요.",
    "fact": "자석 장치와 과학 장비에 쓰여요.",
    "image": "element-images/041-nb.svg"
  },
  {
    "n": 42,
    "s": "Mo",
    "ko": "몰리브데넘",
    "en": "Molybdenum",
    "cat": "전이 금속",
    "group": 6,
    "period": 5,
    "mass": "95.95",
    "state": "고체",
    "desc": "높은 온도에서도 잘 견디는 금속이에요.",
    "fact": "강철을 더 강하게 만드는 데 쓰여요.",
    "image": "element-images/042-mo.svg"
  },
  {
    "n": 43,
    "s": "Tc",
    "ko": "테크네튬",
    "en": "Technetium",
    "cat": "전이 금속",
    "group": 7,
    "period": 5,
    "mass": "[98]",
    "state": "고체",
    "desc": "자연에서는 매우 드물고 방사성을 가진 원소예요.",
    "fact": "의학 검사에 쓰이는 형태가 있어요.",
    "image": "element-images/043-tc.svg"
  },
  {
    "n": 44,
    "s": "Ru",
    "ko": "루테늄",
    "en": "Ruthenium",
    "cat": "전이 금속",
    "group": 8,
    "period": 5,
    "mass": "101.07",
    "state": "고체",
    "desc": "단단하고 귀한 금속 중 하나예요.",
    "fact": "전자 부품과 촉매에 쓰이기도 해요.",
    "image": "element-images/044-ru.svg"
  },
  {
    "n": 45,
    "s": "Rh",
    "ko": "로듐",
    "en": "Rhodium",
    "cat": "전이 금속",
    "group": 9,
    "period": 5,
    "mass": "102.91",
    "state": "고체",
    "desc": "매우 귀하고 반짝이는 금속이에요.",
    "fact": "자동차 배기가스를 줄이는 장치에 쓰여요.",
    "image": "element-images/045-rh.svg"
  },
  {
    "n": 46,
    "s": "Pd",
    "ko": "팔라듐",
    "en": "Palladium",
    "cat": "전이 금속",
    "group": 10,
    "period": 5,
    "mass": "106.42",
    "state": "고체",
    "desc": "귀금속이며 촉매와 전자제품에 쓰여요.",
    "fact": "자동차 촉매 변환기에 쓰여요.",
    "image": "element-images/046-pd.svg"
  },
  {
    "n": 47,
    "s": "Ag",
    "ko": "은",
    "en": "Silver",
    "cat": "전이 금속",
    "group": 11,
    "period": 5,
    "mass": "107.87",
    "state": "고체",
    "desc": "반짝이고 전기가 아주 잘 통하는 귀금속이에요.",
    "fact": "장신구, 은메달, 전자 부품에 쓰여요.",
    "image": "element-images/047-ag.svg"
  },
  {
    "n": 48,
    "s": "Cd",
    "ko": "카드뮴",
    "en": "Cadmium",
    "cat": "전이 금속",
    "group": 12,
    "period": 5,
    "mass": "112.41",
    "state": "고체",
    "desc": "독성이 있어 조심해야 하는 금속이에요.",
    "fact": "예전에는 배터리와 색소에 쓰였어요.",
    "image": "element-images/048-cd.svg"
  },
  {
    "n": 49,
    "s": "In",
    "ko": "인듐",
    "en": "Indium",
    "cat": "전이후 금속",
    "group": 13,
    "period": 5,
    "mass": "114.82",
    "state": "고체",
    "desc": "부드럽고 은빛이 나는 금속이에요.",
    "fact": "터치스크린 재료와 관련이 있어요.",
    "image": "element-images/049-in.svg"
  },
  {
    "n": 50,
    "s": "Sn",
    "ko": "주석",
    "en": "Tin",
    "cat": "전이후 금속",
    "group": 14,
    "period": 5,
    "mass": "118.71",
    "state": "고체",
    "desc": "부드러운 금속으로 다른 금속을 코팅하는 데 쓰여요.",
    "fact": "깡통을 뜻하는 영어 tin과 관련이 있어요.",
    "image": "element-images/050-sn.svg"
  },
  {
    "n": 51,
    "s": "Sb",
    "ko": "안티모니",
    "en": "Antimony",
    "cat": "준금속",
    "group": 15,
    "period": 5,
    "mass": "121.76",
    "state": "고체",
    "desc": "금속과 비금속의 성질을 함께 가진 원소예요.",
    "fact": "불에 잘 타지 않게 하는 재료에 쓰이기도 해요.",
    "image": "element-images/051-sb.svg"
  },
  {
    "n": 52,
    "s": "Te",
    "ko": "텔루륨",
    "en": "Tellurium",
    "cat": "준금속",
    "group": 16,
    "period": 5,
    "mass": "127.60",
    "state": "고체",
    "desc": "전기적 성질이 특별한 준금속이에요.",
    "fact": "태양전지와 관련된 재료에 쓰이기도 해요.",
    "image": "element-images/052-te.svg"
  },
  {
    "n": 53,
    "s": "I",
    "ko": "아이오딘",
    "en": "Iodine",
    "cat": "할로젠",
    "group": 17,
    "period": 5,
    "mass": "126.90",
    "state": "고체",
    "desc": "우리 몸의 갑상샘 건강에 필요한 원소예요.",
    "fact": "상처 소독약의 갈색 성분과 관련이 있어요.",
    "image": "element-images/053-i.svg"
  },
  {
    "n": 54,
    "s": "Xe",
    "ko": "제논",
    "en": "Xenon",
    "cat": "비활성 기체",
    "group": 18,
    "period": 5,
    "mass": "131.29",
    "state": "기체",
    "desc": "잘 반응하지 않는 무거운 기체예요.",
    "fact": "자동차 전조등과 특수 조명에 쓰이기도 해요.",
    "image": "element-images/054-xe.svg"
  },
  {
    "n": 55,
    "s": "Cs",
    "ko": "세슘",
    "en": "Caesium",
    "cat": "알칼리 금속",
    "group": 1,
    "period": 6,
    "mass": "132.91",
    "state": "고체",
    "desc": "매우 부드럽고 반응성이 큰 금속이에요.",
    "fact": "정확한 시간을 재는 원자시계에 쓰여요.",
    "image": "element-images/055-cs.svg"
  },
  {
    "n": 56,
    "s": "Ba",
    "ko": "바륨",
    "en": "Barium",
    "cat": "알칼리 토금속",
    "group": 2,
    "period": 6,
    "mass": "137.33",
    "state": "고체",
    "desc": "무거운 알칼리 토금속이에요.",
    "fact": "X선 검사에서 쓰이는 바륨 화합물이 있어요.",
    "image": "element-images/056-ba.svg"
  },
  {
    "n": 57,
    "s": "La",
    "ko": "란타넘",
    "en": "Lanthanum",
    "cat": "란타넘족",
    "group": 3,
    "period": 6,
    "mass": "138.91",
    "state": "고체",
    "desc": "란타넘족의 시작에 해당하는 금속이에요.",
    "fact": "카메라 렌즈와 배터리 재료에 쓰이기도 해요.",
    "image": "element-images/057-la.svg"
  },
  {
    "n": 58,
    "s": "Ce",
    "ko": "세륨",
    "en": "Cerium",
    "cat": "란타넘족",
    "group": 4,
    "period": 8,
    "mass": "140.12",
    "state": "고체",
    "desc": "란타넘족 원소 중 비교적 많이 알려진 금속이에요.",
    "fact": "라이터의 부싯돌과 관련이 있어요.",
    "image": "element-images/058-ce.svg"
  },
  {
    "n": 59,
    "s": "Pr",
    "ko": "프라세오디뮴",
    "en": "Praseodymium",
    "cat": "란타넘족",
    "group": 5,
    "period": 8,
    "mass": "140.91",
    "state": "고체",
    "desc": "특별한 색을 내는 유리와 자석 재료에 쓰이는 금속이에요.",
    "fact": "초록빛 유리와 관련이 있어요.",
    "image": "element-images/059-pr.svg"
  },
  {
    "n": 60,
    "s": "Nd",
    "ko": "네오디뮴",
    "en": "Neodymium",
    "cat": "란타넘족",
    "group": 6,
    "period": 8,
    "mass": "144.24",
    "state": "고체",
    "desc": "아주 강한 자석을 만드는 데 쓰이는 금속이에요.",
    "fact": "이어폰, 스피커, 전기차 모터의 강한 자석과 관련이 있어요.",
    "image": "element-images/060-nd.svg"
  },
  {
    "n": 61,
    "s": "Pm",
    "ko": "프로메튬",
    "en": "Promethium",
    "cat": "란타넘족",
    "group": 7,
    "period": 8,
    "mass": "[145]",
    "state": "고체",
    "desc": "방사성을 가진 매우 드문 원소예요.",
    "fact": "자연에서는 거의 발견하기 어려워요.",
    "image": "element-images/061-pm.svg"
  },
  {
    "n": 62,
    "s": "Sm",
    "ko": "사마륨",
    "en": "Samarium",
    "cat": "란타넘족",
    "group": 8,
    "period": 8,
    "mass": "150.36",
    "state": "고체",
    "desc": "자석과 특수 장비에 쓰이는 금속이에요.",
    "fact": "강한 자석을 만드는 데 쓰이는 경우가 있어요.",
    "image": "element-images/062-sm.svg"
  },
  {
    "n": 63,
    "s": "Eu",
    "ko": "유로퓸",
    "en": "Europium",
    "cat": "란타넘족",
    "group": 9,
    "period": 8,
    "mass": "151.96",
    "state": "고체",
    "desc": "밝은 색을 내는 데 쓰이는 원소예요.",
    "fact": "화면의 빨간색 빛을 만드는 재료와 관련이 있어요.",
    "image": "element-images/063-eu.svg"
  },
  {
    "n": 64,
    "s": "Gd",
    "ko": "가돌리늄",
    "en": "Gadolinium",
    "cat": "란타넘족",
    "group": 10,
    "period": 8,
    "mass": "157.25",
    "state": "고체",
    "desc": "자기적 성질이 특별한 금속이에요.",
    "fact": "MRI 검사에 쓰이는 물질과 관련이 있어요.",
    "image": "element-images/064-gd.svg"
  },
  {
    "n": 65,
    "s": "Tb",
    "ko": "터븀",
    "en": "Terbium",
    "cat": "란타넘족",
    "group": 11,
    "period": 8,
    "mass": "158.93",
    "state": "고체",
    "desc": "초록색 빛을 내는 재료에 쓰이는 금속이에요.",
    "fact": "디스플레이와 형광체에 쓰여요.",
    "image": "element-images/065-tb.svg"
  },
  {
    "n": 66,
    "s": "Dy",
    "ko": "디스프로슘",
    "en": "Dysprosium",
    "cat": "란타넘족",
    "group": 12,
    "period": 8,
    "mass": "162.50",
    "state": "고체",
    "desc": "강한 자석의 성능을 높이는 데 쓰이는 금속이에요.",
    "fact": "전기차와 풍력발전 자석과 관련이 있어요.",
    "image": "element-images/066-dy.svg"
  },
  {
    "n": 67,
    "s": "Ho",
    "ko": "홀뮴",
    "en": "Holmium",
    "cat": "란타넘족",
    "group": 13,
    "period": 8,
    "mass": "164.93",
    "state": "고체",
    "desc": "자기적 성질이 큰 란타넘족 금속이에요.",
    "fact": "특수 레이저와 연구 장비에 쓰이기도 해요.",
    "image": "element-images/067-ho.svg"
  },
  {
    "n": 68,
    "s": "Er",
    "ko": "어븀",
    "en": "Erbium",
    "cat": "란타넘족",
    "group": 14,
    "period": 8,
    "mass": "167.26",
    "state": "고체",
    "desc": "분홍빛을 내는 유리와 광통신에 쓰이는 원소예요.",
    "fact": "광섬유 통신 장비에 쓰여요.",
    "image": "element-images/068-er.svg"
  },
  {
    "n": 69,
    "s": "Tm",
    "ko": "툴륨",
    "en": "Thulium",
    "cat": "란타넘족",
    "group": 15,
    "period": 8,
    "mass": "168.93",
    "state": "고체",
    "desc": "희귀한 란타넘족 금속이에요.",
    "fact": "특수 X선 장치와 레이저에 쓰이기도 해요.",
    "image": "element-images/069-tm.svg"
  },
  {
    "n": 70,
    "s": "Yb",
    "ko": "이터븀",
    "en": "Ytterbium",
    "cat": "란타넘족",
    "group": 16,
    "period": 8,
    "mass": "173.05",
    "state": "고체",
    "desc": "부드러운 란타넘족 금속이에요.",
    "fact": "원자시계와 레이저 연구에 쓰여요.",
    "image": "element-images/070-yb.svg"
  },
  {
    "n": 71,
    "s": "Lu",
    "ko": "루테튬",
    "en": "Lutetium",
    "cat": "란타넘족",
    "group": 17,
    "period": 8,
    "mass": "174.97",
    "state": "고체",
    "desc": "란타넘족의 마지막 원소로 볼 수 있어요.",
    "fact": "의학 영상과 연구 장비에 쓰이기도 해요.",
    "image": "element-images/071-lu.svg"
  },
  {
    "n": 72,
    "s": "Hf",
    "ko": "하프늄",
    "en": "Hafnium",
    "cat": "전이 금속",
    "group": 4,
    "period": 6,
    "mass": "178.49",
    "state": "고체",
    "desc": "열에 강하고 원자력 분야에서 쓰이는 금속이에요.",
    "fact": "지르코늄과 성질이 비슷해요.",
    "image": "element-images/072-hf.svg"
  },
  {
    "n": 73,
    "s": "Ta",
    "ko": "탄탈럼",
    "en": "Tantalum",
    "cat": "전이 금속",
    "group": 5,
    "period": 6,
    "mass": "180.95",
    "state": "고체",
    "desc": "부식에 강한 금속이에요.",
    "fact": "전자 부품의 콘덴서에 쓰여요.",
    "image": "element-images/073-ta.svg"
  },
  {
    "n": 74,
    "s": "W",
    "ko": "텅스텐",
    "en": "Tungsten",
    "cat": "전이 금속",
    "group": 6,
    "period": 6,
    "mass": "183.84",
    "state": "고체",
    "desc": "녹는점이 매우 높은 금속이에요.",
    "fact": "전구 필라멘트와 단단한 공구에 쓰였어요.",
    "image": "element-images/074-w.svg"
  },
  {
    "n": 75,
    "s": "Re",
    "ko": "레늄",
    "en": "Rhenium",
    "cat": "전이 금속",
    "group": 7,
    "period": 6,
    "mass": "186.21",
    "state": "고체",
    "desc": "높은 온도에서 잘 견디는 귀한 금속이에요.",
    "fact": "제트엔진 재료와 관련이 있어요.",
    "image": "element-images/075-re.svg"
  },
  {
    "n": 76,
    "s": "Os",
    "ko": "오스뮴",
    "en": "Osmium",
    "cat": "전이 금속",
    "group": 8,
    "period": 6,
    "mass": "190.23",
    "state": "고체",
    "desc": "매우 밀도가 큰 금속이에요.",
    "fact": "작고 무거운 금속으로 알려져 있어요.",
    "image": "element-images/076-os.svg"
  },
  {
    "n": 77,
    "s": "Ir",
    "ko": "이리듐",
    "en": "Iridium",
    "cat": "전이 금속",
    "group": 9,
    "period": 6,
    "mass": "192.22",
    "state": "고체",
    "desc": "부식에 매우 강한 귀금속이에요.",
    "fact": "공룡 멸종 연구에서 이리듐층이 중요한 단서가 되었어요.",
    "image": "element-images/077-ir.svg"
  },
  {
    "n": 78,
    "s": "Pt",
    "ko": "백금",
    "en": "Platinum",
    "cat": "전이 금속",
    "group": 10,
    "period": 6,
    "mass": "195.08",
    "state": "고체",
    "desc": "귀하고 반짝이는 금속으로 촉매에 많이 쓰여요.",
    "fact": "장신구와 자동차 촉매 장치에 쓰여요.",
    "image": "element-images/078-pt.svg"
  },
  {
    "n": 79,
    "s": "Au",
    "ko": "금",
    "en": "Gold",
    "cat": "전이 금속",
    "group": 11,
    "period": 6,
    "mass": "196.97",
    "state": "고체",
    "desc": "녹이 잘 슬지 않고 반짝이는 귀한 금속이에요.",
    "fact": "금메달, 장신구, 전자 부품에 쓰여요.",
    "image": "element-images/079-au.svg"
  },
  {
    "n": 80,
    "s": "Hg",
    "ko": "수은",
    "en": "Mercury",
    "cat": "전이 금속",
    "group": 12,
    "period": 6,
    "mass": "200.59",
    "state": "액체",
    "desc": "상온에서 액체인 금속이에요. 독성이 있어 매우 조심해야 해요.",
    "fact": "옛날 온도계에 쓰였지만 지금은 안전 문제로 줄어들었어요.",
    "image": "element-images/080-hg.svg"
  },
  {
    "n": 81,
    "s": "Tl",
    "ko": "탈륨",
    "en": "Thallium",
    "cat": "전이후 금속",
    "group": 13,
    "period": 6,
    "mass": "204.38",
    "state": "고체",
    "desc": "독성이 강해 조심해야 하는 금속이에요.",
    "fact": "특수 전자 장비와 연구에 쓰이기도 해요.",
    "image": "element-images/081-tl.svg"
  },
  {
    "n": 82,
    "s": "Pb",
    "ko": "납",
    "en": "Lead",
    "cat": "전이후 금속",
    "group": 14,
    "period": 6,
    "mass": "207.2",
    "state": "고체",
    "desc": "무겁고 부드러운 금속이지만 독성이 있어 조심해야 해요.",
    "fact": "예전에는 페인트나 배관에 쓰였지만 지금은 사용을 줄이고 있어요.",
    "image": "element-images/082-pb.svg"
  },
  {
    "n": 83,
    "s": "Bi",
    "ko": "비스무트",
    "en": "Bismuth",
    "cat": "전이후 금속",
    "group": 15,
    "period": 6,
    "mass": "208.98",
    "state": "고체",
    "desc": "무겁지만 비교적 독성이 낮은 금속으로 알려져 있어요.",
    "fact": "무지개빛 결정 모양으로도 유명해요.",
    "image": "element-images/083-bi.svg"
  },
  {
    "n": 84,
    "s": "Po",
    "ko": "폴로늄",
    "en": "Polonium",
    "cat": "준금속",
    "group": 16,
    "period": 6,
    "mass": "[209]",
    "state": "고체",
    "desc": "방사성을 가진 매우 위험한 원소예요.",
    "fact": "마리 퀴리와 관련된 원소예요.",
    "image": "element-images/084-po.svg"
  },
  {
    "n": 85,
    "s": "At",
    "ko": "아스타틴",
    "en": "Astatine",
    "cat": "할로젠",
    "group": 17,
    "period": 6,
    "mass": "[210]",
    "state": "고체",
    "desc": "매우 드물고 방사성을 가진 원소예요.",
    "fact": "자연에서 발견되는 양이 아주 적어요.",
    "image": "element-images/085-at.svg"
  },
  {
    "n": 86,
    "s": "Rn",
    "ko": "라돈",
    "en": "Radon",
    "cat": "비활성 기체",
    "group": 18,
    "period": 6,
    "mass": "[222]",
    "state": "기체",
    "desc": "방사성을 가진 기체예요. 환기가 중요해요.",
    "fact": "집 안의 라돈 농도를 검사하기도 해요.",
    "image": "element-images/086-rn.svg"
  },
  {
    "n": 87,
    "s": "Fr",
    "ko": "프랑슘",
    "en": "Francium",
    "cat": "알칼리 금속",
    "group": 1,
    "period": 7,
    "mass": "[223]",
    "state": "고체",
    "desc": "매우 드물고 방사성을 가진 알칼리 금속이에요.",
    "fact": "자연에서 아주 적은 양만 존재해요.",
    "image": "element-images/087-fr.svg"
  },
  {
    "n": 88,
    "s": "Ra",
    "ko": "라듐",
    "en": "Radium",
    "cat": "알칼리 토금속",
    "group": 2,
    "period": 7,
    "mass": "[226]",
    "state": "고체",
    "desc": "방사성을 가진 금속이에요.",
    "fact": "옛날에는 빛나는 물질로 쓰였지만 위험성이 알려졌어요.",
    "image": "element-images/088-ra.svg"
  },
  {
    "n": 89,
    "s": "Ac",
    "ko": "악티늄",
    "en": "Actinium",
    "cat": "악티늄족",
    "group": 3,
    "period": 7,
    "mass": "[227]",
    "state": "고체",
    "desc": "악티늄족의 시작에 해당하는 방사성 금속이에요.",
    "fact": "어두운 곳에서 희미하게 빛날 수 있어요.",
    "image": "element-images/089-ac.svg"
  },
  {
    "n": 90,
    "s": "Th",
    "ko": "토륨",
    "en": "Thorium",
    "cat": "악티늄족",
    "group": 4,
    "period": 9,
    "mass": "232.04",
    "state": "고체",
    "desc": "방사성을 가진 무거운 금속이에요.",
    "fact": "원자력 에너지 연구에서 관심을 받는 원소예요.",
    "image": "element-images/090-th.svg"
  },
  {
    "n": 91,
    "s": "Pa",
    "ko": "프로트악티늄",
    "en": "Protactinium",
    "cat": "악티늄족",
    "group": 5,
    "period": 9,
    "mass": "231.04",
    "state": "고체",
    "desc": "매우 희귀하고 방사성을 가진 원소예요.",
    "fact": "연구용으로 주로 다루어져요.",
    "image": "element-images/091-pa.svg"
  },
  {
    "n": 92,
    "s": "U",
    "ko": "우라늄",
    "en": "Uranium",
    "cat": "악티늄족",
    "group": 6,
    "period": 9,
    "mass": "238.03",
    "state": "고체",
    "desc": "무겁고 방사성을 가진 금속이에요. 원자력 에너지와 관련이 있어요.",
    "fact": "원자력 발전의 연료로 쓰이는 형태가 있어요.",
    "image": "element-images/092-u.svg"
  },
  {
    "n": 93,
    "s": "Np",
    "ko": "넵투늄",
    "en": "Neptunium",
    "cat": "악티늄족",
    "group": 7,
    "period": 9,
    "mass": "[237]",
    "state": "고체",
    "desc": "우라늄보다 번호가 큰 방사성 원소예요.",
    "fact": "해왕성의 이름에서 온 원소예요.",
    "image": "element-images/093-np.svg"
  },
  {
    "n": 94,
    "s": "Pu",
    "ko": "플루토늄",
    "en": "Plutonium",
    "cat": "악티늄족",
    "group": 8,
    "period": 9,
    "mass": "[244]",
    "state": "고체",
    "desc": "방사성이 강한 무거운 금속이에요. 매우 조심해야 해요.",
    "fact": "명왕성의 이름에서 온 원소예요.",
    "image": "element-images/094-pu.svg"
  },
  {
    "n": 95,
    "s": "Am",
    "ko": "아메리슘",
    "en": "Americium",
    "cat": "악티늄족",
    "group": 9,
    "period": 9,
    "mass": "[243]",
    "state": "고체",
    "desc": "방사성을 가진 인공 원소예요.",
    "fact": "일부 연기 감지기에 아주 적은 양이 쓰이기도 해요.",
    "image": "element-images/095-am.svg"
  },
  {
    "n": 96,
    "s": "Cm",
    "ko": "퀴륨",
    "en": "Curium",
    "cat": "악티늄족",
    "group": 10,
    "period": 9,
    "mass": "[247]",
    "state": "고체",
    "desc": "방사성을 가진 인공 원소예요.",
    "fact": "마리 퀴리와 피에르 퀴리의 이름에서 왔어요.",
    "image": "element-images/096-cm.svg"
  },
  {
    "n": 97,
    "s": "Bk",
    "ko": "버클륨",
    "en": "Berkelium",
    "cat": "악티늄족",
    "group": 11,
    "period": 9,
    "mass": "[247]",
    "state": "고체",
    "desc": "실험실에서 만든 방사성 원소예요.",
    "fact": "미국 버클리의 이름에서 왔어요.",
    "image": "element-images/097-bk.svg"
  },
  {
    "n": 98,
    "s": "Cf",
    "ko": "캘리포늄",
    "en": "Californium",
    "cat": "악티늄족",
    "group": 12,
    "period": 9,
    "mass": "[251]",
    "state": "고체",
    "desc": "강한 방사성을 가진 인공 원소예요.",
    "fact": "특수한 중성자 발생 장치에 쓰여요.",
    "image": "element-images/098-cf.svg"
  },
  {
    "n": 99,
    "s": "Es",
    "ko": "아인슈타이늄",
    "en": "Einsteinium",
    "cat": "악티늄족",
    "group": 13,
    "period": 9,
    "mass": "[252]",
    "state": "고체",
    "desc": "아인슈타인의 이름을 딴 방사성 원소예요.",
    "fact": "아주 적은 양만 만들어 연구해요.",
    "image": "element-images/099-es.svg"
  },
  {
    "n": 100,
    "s": "Fm",
    "ko": "페르뮴",
    "en": "Fermium",
    "cat": "악티늄족",
    "group": 14,
    "period": 9,
    "mass": "[257]",
    "state": "고체",
    "desc": "실험실에서 만들어지는 방사성 원소예요.",
    "fact": "과학자 엔리코 페르미의 이름에서 왔어요.",
    "image": "element-images/100-fm.svg"
  },
  {
    "n": 101,
    "s": "Md",
    "ko": "멘델레븀",
    "en": "Mendelevium",
    "cat": "악티늄족",
    "group": 15,
    "period": 9,
    "mass": "[258]",
    "state": "고체",
    "desc": "주기율표를 만든 멘델레예프의 이름을 딴 원소예요.",
    "fact": "아주 적은 양만 만들어 연구해요.",
    "image": "element-images/101-md.svg"
  },
  {
    "n": 102,
    "s": "No",
    "ko": "노벨륨",
    "en": "Nobelium",
    "cat": "악티늄족",
    "group": 16,
    "period": 9,
    "mass": "[259]",
    "state": "고체",
    "desc": "노벨의 이름을 딴 방사성 원소예요.",
    "fact": "실험실에서 아주 적은 양만 만들 수 있어요.",
    "image": "element-images/102-no.svg"
  },
  {
    "n": 103,
    "s": "Lr",
    "ko": "로렌슘",
    "en": "Lawrencium",
    "cat": "악티늄족",
    "group": 17,
    "period": 9,
    "mass": "[266]",
    "state": "고체",
    "desc": "악티늄족의 마지막 원소로 볼 수 있어요.",
    "fact": "입자가속기 연구와 관련이 있어요.",
    "image": "element-images/103-lr.svg"
  },
  {
    "n": 104,
    "s": "Rf",
    "ko": "러더포듐",
    "en": "Rutherfordium",
    "cat": "전이 금속",
    "group": 4,
    "period": 7,
    "mass": "[267]",
    "state": "고체",
    "desc": "실험실에서 만든 매우 무거운 원소예요.",
    "fact": "과학자 러더퍼드의 이름에서 왔어요.",
    "image": "element-images/104-rf.svg"
  },
  {
    "n": 105,
    "s": "Db",
    "ko": "더브늄",
    "en": "Dubnium",
    "cat": "전이 금속",
    "group": 5,
    "period": 7,
    "mass": "[268]",
    "state": "고체",
    "desc": "매우 무거운 인공 원소예요.",
    "fact": "러시아 두브나 연구소의 이름에서 왔어요.",
    "image": "element-images/105-db.svg"
  },
  {
    "n": 106,
    "s": "Sg",
    "ko": "시보귬",
    "en": "Seaborgium",
    "cat": "전이 금속",
    "group": 6,
    "period": 7,
    "mass": "[269]",
    "state": "고체",
    "desc": "실험실에서 만든 방사성 원소예요.",
    "fact": "과학자 글렌 시보그의 이름에서 왔어요.",
    "image": "element-images/106-sg.svg"
  },
  {
    "n": 107,
    "s": "Bh",
    "ko": "보륨",
    "en": "Bohrium",
    "cat": "전이 금속",
    "group": 7,
    "period": 7,
    "mass": "[270]",
    "state": "고체",
    "desc": "매우 무거운 인공 원소예요.",
    "fact": "과학자 닐스 보어의 이름에서 왔어요.",
    "image": "element-images/107-bh.svg"
  },
  {
    "n": 108,
    "s": "Hs",
    "ko": "하슘",
    "en": "Hassium",
    "cat": "전이 금속",
    "group": 8,
    "period": 7,
    "mass": "[277]",
    "state": "고체",
    "desc": "실험실에서 만들어지는 무거운 원소예요.",
    "fact": "독일 헤센 지역 이름에서 왔어요.",
    "image": "element-images/108-hs.svg"
  },
  {
    "n": 109,
    "s": "Mt",
    "ko": "마이트너륨",
    "en": "Meitnerium",
    "cat": "전이 금속",
    "group": 9,
    "period": 7,
    "mass": "[278]",
    "state": "고체",
    "desc": "매우 무거운 방사성 원소예요.",
    "fact": "과학자 리제 마이트너의 이름에서 왔어요.",
    "image": "element-images/109-mt.svg"
  },
  {
    "n": 110,
    "s": "Ds",
    "ko": "다름슈타튬",
    "en": "Darmstadtium",
    "cat": "전이 금속",
    "group": 10,
    "period": 7,
    "mass": "[281]",
    "state": "고체",
    "desc": "실험실에서 만든 초무거운 원소예요.",
    "fact": "독일 다름슈타트의 이름에서 왔어요.",
    "image": "element-images/110-ds.svg"
  },
  {
    "n": 111,
    "s": "Rg",
    "ko": "뢴트게늄",
    "en": "Roentgenium",
    "cat": "전이 금속",
    "group": 11,
    "period": 7,
    "mass": "[282]",
    "state": "고체",
    "desc": "매우 무거운 인공 원소예요.",
    "fact": "X선을 발견한 뢴트겐의 이름에서 왔어요.",
    "image": "element-images/111-rg.svg"
  },
  {
    "n": 112,
    "s": "Cn",
    "ko": "코페르니슘",
    "en": "Copernicium",
    "cat": "전이 금속",
    "group": 12,
    "period": 7,
    "mass": "[285]",
    "state": "고체",
    "desc": "실험실에서 만든 매우 무거운 원소예요.",
    "fact": "천문학자 코페르니쿠스의 이름에서 왔어요.",
    "image": "element-images/112-cn.svg"
  },
  {
    "n": 113,
    "s": "Nh",
    "ko": "니호늄",
    "en": "Nihonium",
    "cat": "전이후 금속",
    "group": 13,
    "period": 7,
    "mass": "[286]",
    "state": "고체",
    "desc": "일본에서 이름을 얻은 초무거운 원소예요.",
    "fact": "니혼은 일본을 뜻해요.",
    "image": "element-images/113-nh.svg"
  },
  {
    "n": 114,
    "s": "Fl",
    "ko": "플레로븀",
    "en": "Flerovium",
    "cat": "전이후 금속",
    "group": 14,
    "period": 7,
    "mass": "[289]",
    "state": "고체",
    "desc": "실험실에서 만든 초무거운 원소예요.",
    "fact": "플레로프 연구소의 이름에서 왔어요.",
    "image": "element-images/114-fl.svg"
  },
  {
    "n": 115,
    "s": "Mc",
    "ko": "모스코븀",
    "en": "Moscovium",
    "cat": "전이후 금속",
    "group": 15,
    "period": 7,
    "mass": "[290]",
    "state": "고체",
    "desc": "매우 무거운 인공 원소예요.",
    "fact": "모스크바 지역 이름에서 왔어요.",
    "image": "element-images/115-mc.svg"
  },
  {
    "n": 116,
    "s": "Lv",
    "ko": "리버모륨",
    "en": "Livermorium",
    "cat": "전이후 금속",
    "group": 16,
    "period": 7,
    "mass": "[293]",
    "state": "고체",
    "desc": "실험실에서 만든 초무거운 원소예요.",
    "fact": "로렌스 리버모어 연구소의 이름에서 왔어요.",
    "image": "element-images/116-lv.svg"
  },
  {
    "n": 117,
    "s": "Ts",
    "ko": "테네신",
    "en": "Tennessine",
    "cat": "할로젠",
    "group": 17,
    "period": 7,
    "mass": "[294]",
    "state": "고체",
    "desc": "매우 무거운 인공 할로젠 원소예요.",
    "fact": "미국 테네시주의 이름에서 왔어요.",
    "image": "element-images/117-ts.svg"
  },
  {
    "n": 118,
    "s": "Og",
    "ko": "오가네손",
    "en": "Oganesson",
    "cat": "비활성 기체",
    "group": 18,
    "period": 7,
    "mass": "[294]",
    "state": "고체",
    "desc": "현재 알려진 원소 중 원자번호가 가장 큰 원소예요.",
    "fact": "과학자 유리 오가네시안의 이름에서 왔어요.",
    "image": "element-images/118-og.svg"
  }
];

const catClass = cat => cat.replaceAll(" ", "-");
const categories = ["비금속","알칼리 금속","알칼리 토금속","전이 금속","전이후 금속","준금속","할로젠","비활성 기체","란타넘족","악티늄족"];

const badges = [
  { id:"first", icon:"🧪", name:"첫 탐험", desc:"원소 1개 학습", unlocked:s=>s.learned.length>=1 },
  { id:"ten", icon:"🔬", name:"원소 친구", desc:"원소 10개 학습", unlocked:s=>s.learned.length>=10 },
  { id:"thirty", icon:"🧬", name:"주기율표 수집가", desc:"원소 30개 학습", unlocked:s=>s.learned.length>=30 },
  { id:"all", icon:"🌟", name:"118 완전 정복", desc:"118개 원소 학습", unlocked:s=>s.learned.length>=118 },
  { id:"quiz10", icon:"🎯", name:"퀴즈 마스터", desc:"퀴즈 10문제 도전", unlocked:s=>s.quiz.total>=10 },
  { id:"quiz50", icon:"🏹", name:"문제 해결사", desc:"퀴즈 50문제 도전", unlocked:s=>s.quiz.total>=50 },
  { id:"combo5", icon:"🔥", name:"콤보 스타", desc:"5문제 연속 정답", unlocked:s=>s.bestCombo>=5 },
  { id:"streak7", icon:"🏆", name:"꾸준한 탐험가", desc:"연속 학습 7일", unlocked:s=>s.streak>=7 },
  { id:"xp1000", icon:"🚀", name:"과학 로켓", desc:"1000XP 달성", unlocked:s=>s.xp>=1000 },
  { id:"accuracy", icon:"💎", name:"정답률 보석", desc:"정답률 80% 이상", unlocked:s=>s.quiz.total>=10 && (s.quiz.correct/s.quiz.total)>=.8 }
];

const defaultState = {
  xp:0, stars:0, streak:0, lastStudyDate:"",
  learned:[], quiz:{total:0, correct:0}, combo:0, bestCombo:0,
  matchedPairs:0, todayLearned:0, todayQuiz:0, todayDate:"", sound:true, voice:true
};

let state = loadState();
let selected = elements[0];
let currentQuiz = null;
let memoryCards = [];
let flipped = [];
let lockMemory = false;
let deferredInstallPrompt = null;

let audioCtx = null;

function getAudioCtx() {
  if (!state.sound) return null;
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(freq = 440, duration = 0.12, type = "sine", gain = 0.045, delay = 0) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0, ctx.currentTime + delay);
  g.gain.linearRampToValueAtTime(gain, ctx.currentTime + delay + 0.01);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start(ctx.currentTime + delay);
  osc.stop(ctx.currentTime + delay + duration + 0.02);
}

function playSound(name) {
  if (!state.sound) return;
  if (name === "learn") {
    playTone(523, .11, "triangle");
    playTone(659, .12, "triangle", .04, .09);
    playTone(784, .16, "triangle", .04, .18);
  } else if (name === "correct") {
    playTone(660, .09, "sine");
    playTone(880, .12, "sine", .04, .09);
  } else if (name === "wrong") {
    playTone(220, .16, "sawtooth", .035);
    playTone(180, .18, "sawtooth", .03, .12);
  } else if (name === "match") {
    playTone(740, .08, "square", .035);
    playTone(980, .10, "square", .03, .08);
  } else if (name === "badge") {
    playTone(523, .08, "triangle");
    playTone(659, .08, "triangle", .04, .08);
    playTone(784, .08, "triangle", .04, .16);
    playTone(1046, .20, "triangle", .04, .24);
  } else if (name === "click") {
    playTone(420, .045, "sine", .025);
  }
}

function updateSoundButton() {
  const btn = document.getElementById("soundToggle");
  if (!btn) return;
  btn.textContent = state.sound ? "🔊 효과음" : "🔇 무음";
  btn.classList.toggle("sound-on", state.sound);
  btn.classList.toggle("sound-off", !state.sound);
}

function updateVoiceButton() {
  const btn = document.getElementById("voiceToggle");
  if (!btn) return;
  btn.textContent = state.voice ? "🗣️ 음성 안내" : "🤐 음성 끔";
  btn.classList.toggle("voice-on", state.voice);
  btn.classList.toggle("voice-off", !state.voice);
}

const symbolSpeechMap = {
  H:"에이치", He:"에이치 이", Li:"엘 아이", Be:"비 이", B:"비", C:"씨", N:"엔", O:"오", F:"에프", Ne:"엔 이",
  Na:"엔 에이", Mg:"엠 지", Al:"에이 엘", Si:"에스 아이", P:"피", S:"에스", Cl:"씨 엘", Ar:"에이 알",
  K:"케이", Ca:"씨 에이", Sc:"에스 씨", Ti:"티 아이", V:"브이", Cr:"씨 알", Mn:"엠 엔", Fe:"에프 이",
  Co:"씨 오", Ni:"엔 아이", Cu:"씨 유", Zn:"지 엔", Ga:"지 에이", Ge:"지 이", As:"에이 에스", Se:"에스 이",
  Br:"비 알", Kr:"케이 알", Rb:"알 비", Sr:"에스 알", Y:"와이", Zr:"지 알", Nb:"엔 비", Mo:"엠 오",
  Tc:"티 씨", Ru:"알 유", Rh:"알 에이치", Pd:"피 디", Ag:"에이 지", Cd:"씨 디", In:"아이 엔", Sn:"에스 엔",
  Sb:"에스 비", Te:"티 이", I:"아이", Xe:"엑스 이", Cs:"씨 에스", Ba:"비 에이", La:"엘 에이", Ce:"씨 이",
  Pr:"피 알", Nd:"엔 디", Pm:"피 엠", Sm:"에스 엠", Eu:"이 유", Gd:"지 디", Tb:"티 비", Dy:"디 와이",
  Ho:"에이치 오", Er:"이 알", Tm:"티 엠", Yb:"와이 비", Lu:"엘 유", Hf:"에이치 에프", Ta:"티 에이", W:"더블유",
  Re:"알 이", Os:"오 에스", Ir:"아이 알", Pt:"피 티", Au:"에이 유", Hg:"에이치 지", Tl:"티 엘", Pb:"피 비",
  Bi:"비 아이", Po:"피 오", At:"에이 티", Rn:"알 엔", Fr:"에프 알", Ra:"알 에이", Ac:"에이 씨", Th:"티 에이치",
  Pa:"피 에이", U:"유", Np:"엔 피", Pu:"피 유", Am:"에이 엠", Cm:"씨 엠", Bk:"비 케이", Cf:"씨 에프",
  Es:"이 에스", Fm:"에프 엠", Md:"엠 디", No:"엔 오", Lr:"엘 알", Rf:"알 에프", Db:"디 비", Sg:"에스 지",
  Bh:"비 에이치", Hs:"에이치 에스", Mt:"엠 티", Ds:"디 에스", Rg:"알 지", Cn:"씨 엔", Nh:"엔 에이치",
  Fl:"에프 엘", Mc:"엠 씨", Lv:"엘 브이", Ts:"티 에스", Og:"오 지"
};

function getSymbolSpeech(symbol) {
  return symbolSpeechMap[symbol] || String(symbol).split("").join(" ");
}

function speakShort(text) {
  if (!state.voice) return;
  if (!("speechSynthesis" in window)) {
    alert("이 브라우저에서는 음성 안내를 지원하지 않습니다.");
    return;
  }

  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  const koVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("ko"));
  if (koVoice) utter.voice = koVoice;
  utter.lang = "ko-KR";
  utter.rate = 0.96;
  utter.pitch = 1.05;
  utter.volume = 1;
  speechSynthesis.speak(utter);
}

function speakNameSymbol(el, prefix = "") {
  if (!el) return;
  const symbolText = getSymbolSpeech(el.s);
  const text = prefix
    ? `${prefix}, ${el.ko}. 원소기호는 ${symbolText}.`
    : `${el.ko}. 원소기호는 ${symbolText}.`;
  speakShort(text);
}

function showAnswerVoiceButton(buttonId, element) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  btn.classList.remove("hidden");
  btn.dataset.elementNumber = element.n;
}

function hideAnswerVoiceButton(buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  btn.classList.add("hidden");
  btn.dataset.elementNumber = "";
}

function speakAnswerFromButton(buttonId) {
  const btn = document.getElementById(buttonId);
  const n = Number(btn?.dataset.elementNumber || 0);
  const el = elements.find(item => item.n === n);
  if (el) speakNameSymbol(el, "정답");
}


function todayKey() { return new Date().toISOString().slice(0,10); }
function cloneDefault() { return JSON.parse(JSON.stringify(defaultState)); }

function loadState() {
  const saved = localStorage.getItem("elementExplorerPwaState");
  if (!saved) return cloneDefault();
  try { return {...cloneDefault(), ...JSON.parse(saved)}; }
  catch { return cloneDefault(); }
}

function normalizeToday() {
  const today = todayKey();
  if (state.todayDate !== today) {
    state.todayDate = today;
    state.todayLearned = 0;
    state.todayQuiz = 0;
  }
}

function saveState() {
  normalizeToday();
  localStorage.setItem("elementExplorerPwaState", JSON.stringify(state));
  renderStatus(); renderRecords(); renderBadges(); renderMission(); updateSoundButton(); updateVoiceButton();
}

function addXp(amount) { state.xp += amount; state.stars += Math.max(1, Math.floor(amount/20)); }

function touchStudyDay() {
  const today = todayKey();
  if (state.lastStudyDate !== today) {
    state.streak += 1;
    state.lastStudyDate = today;
  }
}

function renderStatus() {
  const level = Math.floor(state.xp/300)+1;
  const levelXp = state.xp%300;
  document.getElementById("levelText").textContent = `Lv.${level} 탐험대원`;
  document.getElementById("xpBar").style.width = `${Math.min(100,(levelXp/300)*100)}%`;
  document.getElementById("starCount").textContent = state.stars;
  document.getElementById("streakCount").textContent = state.streak;
}

function renderLegend() {
  const box = document.getElementById("legend");
  box.innerHTML = categories.map(cat => `<span><i class="${catClass(cat)}"></i>${cat}</span>`).join("");
}

function renderTable() {
  const table = document.getElementById("periodicTable");
  const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
  table.innerHTML = "";
  elements.forEach(el => {
    const btn = document.createElement("button");
    const match = !keyword || el.ko.includes(keyword) || el.en.toLowerCase().includes(keyword) || el.s.toLowerCase().includes(keyword) || String(el.n)===keyword;
    btn.className = `element ${catClass(el.cat)} ${el.n===selected.n?"selected":""} ${match?"":"dim"}`;
    btn.style.gridColumn = el.group;
    btn.style.gridRow = el.period;
    btn.innerHTML = `<span class="num">${el.n}</span><span class="sym">${el.s}</span>`;
    btn.title = `${el.n}. ${el.ko} (${el.s})`;
    btn.addEventListener("click", () => { selected = el; renderTable(); renderElementPanel(); });
    table.appendChild(btn);
  });
}

function renderElementPanel() {
  const big = document.getElementById("bigElement");
  big.className = `big-element ${catClass(selected.cat)}`;
  big.innerHTML = `<strong>${selected.s}</strong><span>${selected.n}</span>`;
  document.getElementById("elementImage").src = selected.image;
  document.getElementById("elementImage").alt = `${selected.ko} 원소 이미지`;
  document.getElementById("elementName").textContent = selected.ko;
  document.getElementById("elementEnglish").textContent = selected.en;
  document.getElementById("elementNumber").textContent = selected.n;
  document.getElementById("elementSymbol").textContent = selected.s;
  document.getElementById("elementCategory").textContent = selected.cat;
  document.getElementById("elementState").textContent = selected.state;
  document.getElementById("elementMass").textContent = selected.mass;
  document.getElementById("elementDesc").textContent = selected.desc;
  document.getElementById("elementFact").textContent = selected.fact;
}

function learnSelectedElement() {
  normalizeToday(); touchStudyDay();
  playSound("learn");
  document.querySelector(".element-panel").classList.add("celebrate");
  setTimeout(()=>document.querySelector(".element-panel").classList.remove("celebrate"), 360);
  if (!state.learned.includes(selected.n)) {
    state.learned.push(selected.n); state.todayLearned += 1; addXp(20);
    alert(`🎉 ${selected.ko} 학습 완료! +20XP`);
  } else {
    addXp(5);
    alert(`복습 완료! ${selected.ko}를 다시 확인했어요. +5XP`);
  }
  saveState(); renderTable();
}

function switchView(viewName) {
  document.querySelectorAll(".tab").forEach(btn=>btn.classList.toggle("active",btn.dataset.view===viewName));
  document.querySelectorAll(".view").forEach(view=>view.classList.toggle("active",view.id===viewName));
  if (viewName==="quiz") makeQuiz();
  if (viewName==="play") renderPlayQuestion();
  if (viewName==="record") renderRecords();
  if (viewName==="badge") renderBadges();
}

function shuffle(arr) { return [...arr].sort(()=>Math.random()-.5); }

function makeQuiz() {
  const mode = document.getElementById("quizMode").value;
  const target = elements[Math.floor(Math.random()*elements.length)];
  const wrongs = shuffle(elements.filter(el=>el.n!==target.n)).slice(0,3);
  const options = shuffle([target,...wrongs]);
  currentQuiz = target;

  const symbolBox = document.getElementById("quizSymbol");
  symbolBox.className = `quiz-symbol ${mode}`;
  if (mode === "symbol") {
    document.getElementById("questionText").textContent = "이 기호의 원소 이름은 무엇일까요?";
    symbolBox.textContent = target.s;
  } else if (mode === "desc") {
    document.getElementById("questionText").textContent = "이 설명에 맞는 원소는 무엇일까요?";
    symbolBox.textContent = target.desc;
  } else {
    document.getElementById("questionText").textContent = "이 원자번호의 원소 이름은 무엇일까요?";
    symbolBox.textContent = target.n;
  }

  document.getElementById("quizFeedback").textContent = "";
  hideAnswerVoiceButton("speakQuizAnswerButton");
  document.getElementById("comboText").textContent = state.combo;
  document.getElementById("rewardXp").textContent = 30 + Math.min(20, state.combo*5);

  const box = document.getElementById("answerButtons");
  box.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = opt.ko;
    btn.addEventListener("click", () => checkAnswer(btn, opt));
    box.appendChild(btn);
  });
}

function checkAnswer(button, answer) {
  const buttons = [...document.querySelectorAll(".answer")];
  buttons.forEach(btn=>btn.disabled=true);
  normalizeToday(); touchStudyDay();
  state.quiz.total += 1; state.todayQuiz += 1;
  if (answer.n === currentQuiz.n) {
    const reward = 30 + Math.min(20,state.combo*5);
    state.quiz.correct += 1; state.combo += 1; state.bestCombo = Math.max(state.bestCombo,state.combo);
    addXp(reward); button.classList.add("correct");
    playSound("correct");
    showAnswerVoiceButton("speakQuizAnswerButton", currentQuiz);
    document.getElementById("quizFeedback").textContent = `정답! ${currentQuiz.ko}(${currentQuiz.s})예요. +${reward}XP`;
  } else {
    state.combo = 0; button.classList.add("wrong");
    buttons.forEach(btn => { if (btn.textContent === currentQuiz.ko) btn.classList.add("correct"); });
    playSound("wrong");
    document.getElementById("quizFeedback").textContent = `아쉬워요. 정답은 ${currentQuiz.ko}(${currentQuiz.s})예요.`;
  }
  saveState();
}

let playMode = "symbol";
let currentPlay = null;

function normalizeAnswer(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .toLowerCase();
}

function createPlayQuestion() {
  const learnedElements = state.learned.length >= 6
    ? elements.filter(el => state.learned.includes(el.n))
    : elements;

  const target = learnedElements[Math.floor(Math.random() * learnedElements.length)];

  if (playMode === "symbol") {
    return {
      mode: "symbol",
      elementNumber: target.n,
      answer: target.s,
      type: "elementSymbol",
      label: "원소기호",
      html: `
        <div class="question-label">아래 정보를 보고 <b>원소기호</b>를 입력하세요.</div>
        <div class="symbol-mission">
          <div class="name-card">
            <span>한글 원소명</span>
            <strong>${target.ko}</strong>
          </div>
          <div class="clue-grid compact">
            <div><span>원자번호</span><strong>${target.n}</strong></div>
            <div><span>분류</span><strong>${target.cat}</strong></div>
            <div><span>상태</span><strong>${target.state}</strong></div>
            <div><span>원자량</span><strong>${target.mass}</strong></div>
          </div>
        </div>
        <div class="hint">설명: ${target.desc}</div>
      `,
      placeholder: "예: H, O, Na"
    };
  }

  return {
    mode: "name",
    elementNumber: target.n,
    answer: target.ko,
    type: "elementName",
    label: "원소이름",
    html: `
      <div class="question-label">아래 정보를 보고 <b>한글 원소명</b>을 입력하세요.</div>
      <div class="clue-grid">
        <div><span>원자번호</span><strong>${target.n}</strong></div>
        <div><span>원소기호</span><strong>${target.s}</strong></div>
        <div><span>분류</span><strong>${target.cat}</strong></div>
        <div><span>상태</span><strong>${target.state}</strong></div>
      </div>
      <div class="hint">설명: ${target.desc}</div>
    `,
    placeholder: "예: 수소"
  };
}

function renderPlayQuestion() {
  if (!currentPlay || currentPlay.mode !== playMode) {
    currentPlay = createPlayQuestion();
  }

  document.getElementById("playFeedback").textContent = "";
  hideAnswerVoiceButton("speakPlayAnswerButton");
  document.getElementById("playQuestionBox").innerHTML = currentPlay.html;
  document.getElementById("playAnswerInput").value = "";
  document.getElementById("playAnswerInput").placeholder = currentPlay.placeholder;

  setTimeout(() => document.getElementById("playAnswerInput").focus(), 50);
}

function makePlayQuestion() {
  currentPlay = createPlayQuestion();
  renderPlayQuestion();
}

function checkPlayAnswer() {
  if (!currentPlay) makePlayQuestion();

  const user = normalizeAnswer(document.getElementById("playAnswerInput").value);
  const answer = normalizeAnswer(currentPlay.answer);
  const target = elements.find(el => el.n === currentPlay.elementNumber);
  const feedback = document.getElementById("playFeedback");

  if (!user) {
    feedback.textContent = "정답을 입력해 주세요.";
    return;
  }

  const ok = user === answer;

  if (ok) {
    touchStudyDay();
    state.combo += 1;
    state.bestCombo = Math.max(state.bestCombo, state.combo);
    addXp(40);

    if (!state.learned.includes(target.n)) {
      state.learned.push(target.n);
      state.todayLearned += 1;
    }

    if (state.combo > 0 && state.combo % 3 === 0) {
      addXp(30);
      playSound("badge");
      feedback.textContent = `정답! ${currentPlay.answer} 맞아요. 3연속 정답 보너스까지 +70XP!`;
    } else {
      playSound("correct");
      feedback.textContent = `정답! ${currentPlay.answer} 맞아요. +40XP`;
    }

    showAnswerVoiceButton("speakPlayAnswerButton", target);
    document.querySelector(".play-card").classList.add("celebrate");
    setTimeout(() => document.querySelector(".play-card").classList.remove("celebrate"), 360);
    saveState();
    setTimeout(makePlayQuestion, 900);
  } else {
    state.combo = 0;
    playSound("wrong");
    feedback.textContent = `아쉬워요. 학습 탭에서 다시 확인한 뒤 돌아와도 이 문제는 그대로 유지돼요.`;
    saveState();
  }
}

function setPlayMode(mode) {
  playMode = mode;
  document.querySelectorAll(".play-mode").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  makePlayQuestion();
}

function goStudyHint() {
  if (!currentPlay) makePlayQuestion();
  const target = elements.find(el => el.n === currentPlay.elementNumber);
  if (target) {
    selected = target;
    renderTable();
    renderElementPanel();
  }
  switchView("learn");
}

function renderRecords() {
  document.getElementById("learnedCount").textContent = state.learned.length;
  document.getElementById("xpText").textContent = state.xp;
  const accuracy = state.quiz.total===0 ? 0 : Math.round((state.quiz.correct/state.quiz.total)*100);
  document.getElementById("accuracyText").textContent = `${accuracy}%`;
  const weekDone = Math.min(7,state.streak);
  document.getElementById("weeklyGoalText").textContent = `${weekDone} / 7일`;
  document.getElementById("weeklyProgress").value = weekDone;
  const days = ["월","화","수","목","금","토","일"];
  const week = document.getElementById("weekTracker"); week.innerHTML = "";
  days.forEach((day,idx)=>{
    const div = document.createElement("div");
    div.className = `day ${idx<weekDone?"done":""}`;
    div.textContent = idx<weekDone ? `${day} ✓` : day;
    week.appendChild(div);
  });
  const categoryBox = document.getElementById("categoryProgress"); categoryBox.innerHTML = "";
  categories.forEach(cat => {
    const total = elements.filter(el=>el.cat===cat).length;
    const learned = elements.filter(el=>el.cat===cat && state.learned.includes(el.n)).length;
    const pct = total===0 ? 0 : Math.round((learned/total)*100);
    const row = document.createElement("div");
    row.className = "category-row";
    row.innerHTML = `<span>${cat}</span><div class="bar"><span style="width:${pct}%"></span></div><span>${learned}/${total}</span>`;
    categoryBox.appendChild(row);
  });
}

function renderMission() {
  normalizeToday();
  const accuracy = state.quiz.total===0 ? 0 : Math.round((state.quiz.correct/state.quiz.total)*100);
  const score = Math.min(3,state.todayLearned) + Math.min(5,state.todayQuiz) + (accuracy>=70 ? 1 : 0);
  const percent = Math.min(100,Math.round((score/9)*100));
  document.getElementById("missionPercent").textContent = `${percent}%`;
  document.getElementById("missionProgress").value = percent;
}

function renderBadges() {
  const list = document.getElementById("badgeList"); list.innerHTML = "";
  badges.forEach(badge => {
    const ok = badge.unlocked(state);
    const div = document.createElement("div");
    div.className = `badge ${ok?"":"locked"}`;
    div.innerHTML = `<div class="icon">${badge.icon}</div><strong>${badge.name}</strong><p>${badge.desc}</p><p>${ok?"획득 완료!":"아직 잠겨 있어요"}</p>`;
    list.appendChild(div);
  });
}

function resetAll() {
  if (!confirm("학습 기록을 모두 초기화할까요?")) return;
  state = cloneDefault();
  localStorage.removeItem("elementExplorerPwaState");
  saveState(); renderTable(); makeQuiz(); makePlayQuestion();
}

document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{ playSound("click"); switchView(btn.dataset.view); }));
document.getElementById("learnButton").addEventListener("click", learnSelectedElement);
document.getElementById("nextQuizButton").addEventListener("click", makeQuiz);
document.getElementById("newPlayButton").addEventListener("click", makePlayQuestion);
document.getElementById("quizMode").addEventListener("change", makeQuiz);
document.getElementById("searchInput").addEventListener("input", renderTable);
document.getElementById("resetButton").addEventListener("click", resetAll);

document.getElementById("soundToggle").addEventListener("click", () => {
  state.sound = !state.sound;
  updateSoundButton();
  saveState();
  if (state.sound) playSound("correct");
});

document.getElementById("voiceToggle").addEventListener("click", () => {
  state.voice = !state.voice;
  updateVoiceButton();
  saveState();
  if (!state.voice && "speechSynthesis" in window) speechSynthesis.cancel();
  if (state.voice) speakShort("음성 안내를 켰어요.");
});

document.getElementById("speakElementButton").addEventListener("click", () => {
  speakNameSymbol(selected);
});

document.getElementById("speakQuizAnswerButton").addEventListener("click", () => {
  speakAnswerFromButton("speakQuizAnswerButton");
});

document.getElementById("speakPlayAnswerButton").addEventListener("click", () => {
  speakAnswerFromButton("speakPlayAnswerButton");
});


document.getElementById("checkPlayButton").addEventListener("click", checkPlayAnswer);
document.getElementById("studyHintButton").addEventListener("click", goStudyHint);
document.getElementById("playAnswerInput").addEventListener("keydown", event => {
  if (event.key === "Enter") checkPlayAnswer();
});
document.querySelectorAll(".play-mode").forEach(btn => {
  btn.addEventListener("click", () => setPlayMode(btn.dataset.mode));
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.getElementById("installButton").classList.remove("hidden");
});

document.getElementById("installButton").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.getElementById("installButton").classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

normalizeToday();
renderLegend(); renderStatus(); renderTable(); renderElementPanel(); renderRecords(); renderBadges(); renderMission(); updateSoundButton(); updateVoiceButton(); makePlayQuestion();
