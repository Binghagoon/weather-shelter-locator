import React from 'react';

export default function WeatherShelterPage() {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-20 font-sans">
      {/* 상단 헤더 */}
      <header className="flex justify-between items-center p-4 bg-white">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">O</div>
        <h1 className="font-bold text-lg">실라장이</h1>
        <button className="text-gray-500">⚙️</button>
      </header>

      {/* 메인 날씨 카드 */}
      <section className="m-4 p-6 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl text-white shadow-lg">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🌡️</span>
            <div>
              <h2 className="text-xl font-bold">폭염 경보</h2>
              <span className="bg-white/20 text-xs px-2 py-0.5 rounded">경고</span>
            </div>
          </div>
          <button className="text-white/70">⚠️</button>
        </div>

        <div className="mt-4">
          <h3 className="text-6xl font-light">36<span className="text-3xl">°C</span></h3>
          <p className="mt-2 text-white/90 text-sm">매우 무더운 날씨입니다. 실외 활동을 자제하세요.</p>
        </div>

        {/* 세부 기상 정보 그리드 */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <WeatherInfoItem label="습도" value="65%" icon="💧" />
          <WeatherInfoItem label="강수확률" value="20%" icon="☔" />
          <WeatherInfoItem label="미세먼지" value="45µg/m²" icon="💨" />
          <WeatherInfoItem label="풍속" value="3.2m/s" icon="🚩" />
        </div>

        {/* 그래프 영역 (박스만 구현) */}
        <div className="mt-6 p-4 bg-white/10 rounded-2xl border border-white/20">
          <p className="text-xs mb-2">시간별 기온 변화</p>
          <div className="h-24 w-full flex items-end justify-between px-2">
             {/* 실제 그래프는 라이브러리(recharts 등)가 필요합니다 */}
             <div className="text-[10px] text-white/60 w-full text-center">그래프 영역</div>
          </div>
        </div>
      </section>

      {/* 탭 버튼 */}
      <div className="flex px-4 gap-2 mb-4">
        <button className="flex-1 py-2 bg-green-800 text-white rounded-lg text-sm font-bold">폭염</button>
        <button className="flex-1 py-2 bg-white border text-gray-400 rounded-lg text-sm">한파</button>
        <button className="flex-1 py-2 bg-white border text-gray-400 rounded-lg text-sm">미세먼지</button>
      </div>

      {/* 쉼터 리스트 섹션 */}
      <section className="px-4">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm text-gray-500">가까운 순 4개</p>
        </div>

        <div className="space-y-3">
          <ShelterItem name="중앙도서관 무더위쉼터" address="서울특별시 강남구 테헤란로 123" distance="0.3km" />
          <ShelterItem name="시민회관 한파쉼터" address="서울특별시 강남구 역삼동 456-7" distance="0.5km" />
          <ShelterItem name="구민체육센터" address="서울특별시 강남구 대치동 234-56" distance="1.2km" />
        </div>
      </section>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t flex justify-around py-3">
        <NavItem label="지도" icon="🗺️" active={false} />
        <NavItem label="홈" icon="🏠" active={true} />
        <NavItem label="로그인" icon="👤" active={false} />
      </nav>
    </div>
  );
}

// 재사용 가능한 컴포넌트들
function WeatherInfoItem({ label, value, icon }: { label: string, value: string, icon: string }) {
  return (
    <div className="bg-white/10 p-3 rounded-xl border border-white/10">
      <div className="flex items-center gap-1 text-[10px] text-white/70 mb-1">
        <span>{icon}</span> {label}
      </div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  );
}

function ShelterItem({ name, address, distance }: { name: string, address: string, distance: string }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="flex gap-3">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">📍</div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-[10px] text-gray-400">{address}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">{distance}</span>
        <button className="text-[10px] bg-green-800 text-white px-3 py-1 rounded-lg flex items-center gap-1">
          ↗ 경로
        </button>
      </div>
    </div>
  );
}

function NavItem({ label, icon, active }: { label: string, icon: string, active: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${active ? 'text-green-700' : 'text-gray-400'}`}>
      <span className="text-xl">{icon}</span>
      <span className="text-[10px]">{label}</span>
    </div>
  );
}
