/* UCA 문제은행 — index.html·admin.html 공용 (자동 분리) */
const Q = [
/* ===== Editor Interface (14) ===== */
{d:"EDITOR",f:"hotspot",q:"씬 안의 오브젝트 계층(부모-자식) 구조를 확인·편집하려면 어느 창인가?",tmpl:"editor",ans:"hierarchy",e:"Hierarchy 창이 씬 내 오브젝트의 계층을 표시한다."},
{d:"EDITOR",f:"hotspot",q:"선택한 오브젝트의 컴포넌트와 속성값을 수정하는 창은?",tmpl:"editor",ans:"inspector",e:"Inspector 창에서 컴포넌트·속성을 편집한다."},
{d:"EDITOR",f:"hotspot",q:"에디터에서 게임을 실행(Play)하는 버튼은?",tmpl:"editor",ans:"playbtn",e:"Toolbar 중앙의 Play 버튼으로 Play Mode에 진입한다."},
{d:"EDITOR",f:"hotspot",q:"프리팹·스크립트·텍스처 등 프로젝트 에셋이 저장된 창은?",tmpl:"editor",ans:"project",e:"Project 창이 프로젝트의 모든 에셋 저장소다."},
{d:"EDITOR",f:"hotspot",q:"로그·경고·에러 메시지를 확인하는 창은?",tmpl:"editor",ans:"console",e:"Console 창에서 Debug 로그와 오류를 확인한다."},
{d:"EDITOR",f:"mc",q:"Scene 뷰에서 카메라를 대상 오브젝트 중심으로 회전시키는 조작은?",opts:["Pan","Zoom","Orbit","Focus"],ans:2,e:"Orbit은 대상 중심 회전. Pan은 평행이동, Focus는 대상으로 이동."},
{d:"EDITOR",f:"mc",q:"빈 GameObject를 새로 만드는 일반적 위치는?",opts:["Project 창 우클릭","Hierarchy 우클릭 → Create Empty","Console 창","Inspector 하단"],ans:1,e:"Hierarchy에서 Create Empty로 생성한다."},
{d:"EDITOR",f:"mc",q:"Inspector 창의 주된 역할은?",opts:["에셋 파일 저장","선택 오브젝트의 컴포넌트·속성 편집","씬 3D 편집","빌드 설정"],ans:1,e:"선택된 오브젝트의 속성을 노출·편집한다."},
{d:"EDITOR",f:"mc",q:"두 오브젝트를 부모-자식 관계로 만들려면?",opts:["Inspector에서 Parent 입력","Hierarchy에서 한 오브젝트를 다른 오브젝트 위로 드래그","Project에서 폴더 이동","태그 지정"],ans:1,e:"Hierarchy 드래그로 부모-자식(자식은 부모 Transform 기준)을 만든다."},
{d:"EDITOR",f:"mc",q:"Scene 파일이 저장하는 것은?",opts:["오브젝트 배치와 씬 환경","C# 코드","텍스처 이미지","빌드 결과물"],ans:0,e:"씬은 오브젝트 배치·조명·환경 구성을 담는다."},
{d:"EDITOR",f:"mc",q:"창 배치를 바꾸고 저장하는 기능은?",opts:["Gizmo","Layout(레이아웃)","Prefab","NavMesh"],ans:1,e:"Layout으로 창 도킹 구성을 저장·전환한다."},
{d:"EDITOR",f:"mc",q:"Project 창의 역할로 옳은 것은?",opts:["실시간 게임 화면","씬 계층 구조","에셋(프리팹/스크립트/오디오 등) 관리","물리 시뮬레이션"],ans:2,e:"Project는 에셋 저장·관리 창이다."},
{d:"EDITOR",f:"mc",q:"Game 뷰가 보여주는 것은?",opts:["에디터 편집 화면","플레이어가 실제로 보는 카메라 시점","코드 편집기","에셋 목록"],ans:1,e:"Game 뷰는 렌더 카메라 기준 최종 화면이다."},
{d:"EDITOR",f:"mc",q:"Gizmo 표시를 켜고 끄는 위치는?",opts:["Project 창","Scene 뷰 상단/Toolbar의 Gizmos 토글","Console","Package Manager"],ans:1,e:"Scene 뷰 상단 Gizmos 토글로 제어한다."},

/* ===== Programming (12) ===== */
{d:"PROG",f:"mc",q:"Rigidbody 기반 물리 이동 코드는 어느 메서드에 넣어야 하는가?",opts:["Awake()","Start()","Update()","FixedUpdate()"],ans:3,e:"물리 연산은 고정 시간 간격의 FixedUpdate()에서 처리한다."},
{d:"PROG",f:"mc",q:"프레임률과 무관하게 일정한 이동 속도를 얻으려면 이동량에 무엇을 곱하는가?",opts:["Time.time","Time.deltaTime","Time.frameCount","1.0f"],ans:1,e:"Time.deltaTime(직전 프레임 간격)을 곱해 프레임 독립성을 얻는다."},
{d:"PROG",f:"mc",q:"같은 GameObject에 붙은 다른 컴포넌트 참조를 얻는 방법은?",opts:["new Component()","GetComponent<T>()","Instantiate<T>()","FindTag()"],ans:1,e:"GetComponent<T>()로 같은 오브젝트의 컴포넌트를 가져온다(캐싱 권장)."},
{d:"PROG",f:"mc",q:"Update() 메서드의 호출 빈도는?",opts:["앱 시작 시 1회","매 프레임 1회","고정 시간마다","충돌 시에만"],ans:1,e:"Update()는 매 프레임 1회 호출된다."},
{d:"PROG",f:"mc",q:"Awake()와 Start()의 차이로 옳은 것은?",opts:["둘 다 매 프레임 호출","Awake는 오브젝트 로드 시, Start는 첫 프레임 직전 1회","Start가 먼저 호출","둘 다 물리 갱신용"],ans:1,e:"Awake→(활성화)→Start 순. 각각 초기화 시점 1회 호출."},
{d:"PROG",f:"mc",q:"public으로 선언한 변수의 효과는?",opts:["Inspector에 노출되어 편집 가능","자동으로 상수","렌더링 제외","물리 무시"],ans:0,e:"public 변수는 Inspector에 노출된다([SerializeField]도 유사)."},
{d:"PROG",f:"mc",q:"3D 회전을 표현할 때 Unity가 내부적으로 사용하는 타입은?",opts:["Vector3","Quaternion","Color","Matrix2x2"],ans:1,e:"회전은 Quaternion으로 표현(짐벌락 회피)."},
{d:"PROG",f:"mc",q:"프리팹을 런타임에 씬에 생성하는 API는?",opts:["Create()","Instantiate()","Clone()","Spawn()"],ans:1,e:"Instantiate()로 프리팹 원본을 복제해 실체를 만든다."},
{d:"PROG",f:"mc",q:"Vector3.forward가 가리키는 축은?",opts:["+X","+Y","+Z","-Z"],ans:2,e:"forward는 +Z 방향이다."},
{d:"PROG",f:"order",q:"스크립트 생명주기 메서드가 호출되는 순서대로 배열하시오.",items:["Awake","OnEnable","Start","Update","LateUpdate"],e:"Awake→OnEnable→Start→Update→LateUpdate (FixedUpdate는 물리 스텝마다 별도)."},
{d:"PROG",f:"order",q:"새 스크립트를 만들어 동작시키는 작업 순서를 배열하시오.",items:["C# 스크립트 생성","GameObject에 컴포넌트로 부착","코드 작성","Play로 테스트"],e:"생성→부착→작성→테스트."},
{d:"PROG",f:"order",q:"마우스 클릭 지점으로 레이캐스트를 쏘는 처리 순서를 배열하시오.",items:["Camera.ScreenPointToRay로 광선 생성","Physics.Raycast 호출","hit.collider로 대상 판별"],e:"화면 좌표→광선→레이캐스트→충돌 대상 처리."},

/* ===== Physics (9) ===== */
{d:"PHYS",f:"mc",q:"트리거/충돌 콜백이 발동하려면 최소 필요한 조건은?",opts:["두 오브젝트 모두 Rigidbody","두 오브젝트 중 최소 하나에 Rigidbody","카메라가 있어야 함","태그가 같아야 함"],ans:1,e:"최소 한쪽에 Rigidbody가 있어야 물리 엔진이 접촉을 계산한다."},
{d:"PHYS",f:"mc",q:"물리적으로 튕기지 않고 겹침만 감지하려면?",opts:["isTrigger=true + OnTriggerEnter","isTrigger=false + OnCollisionEnter","Rigidbody 제거","Mass=0"],ans:0,e:"isTrigger를 켜면 충돌 반응 없이 겹침만 콜백으로 감지한다."},
{d:"PHYS",f:"mc",q:"성능상 가장 가벼운(연산이 적은) 콜라이더는?",opts:["Mesh Collider","Primitive(Box/Sphere/Capsule) Collider","Convex Mesh Collider","Terrain Collider"],ans:1,e:"Box/Sphere/Capsule 같은 Primitive 콜라이더가 가장 가볍다. Mesh Collider(특히 non-convex)는 형상 계산이 무겁다."},
{d:"PHYS",f:"mc",q:"레이캐스트(Raycast)의 용도로 옳은 것은?",opts:["오브젝트 색상 변경","광선을 쏘아 충돌·거리·조준 판별","오디오 재생","애니메이션 전환"],ans:1,e:"Raycast는 광선으로 충돌 지점·거리 등을 얻는다."},
{d:"PHYS",f:"match",q:"Rigidbody 속성과 효과를 짝지으시오.",left:["Mass","Drag","Use Gravity","Is Kinematic"],right:["질량(충돌 반응에 영향)","공기 저항(감속)","중력 적용 여부","물리엔진 대신 직접 제어"],e:"Mass=질량, Drag=저항, Use Gravity=중력, Is Kinematic=직접제어."},
{d:"PHYS",f:"match",q:"콜라이더 종류와 특성을 짝지으시오.",left:["Box Collider","Sphere Collider","Capsule Collider","Mesh Collider"],right:["직육면체 범위","구 범위","캡슐(캐릭터에 흔함)","메시 형상(정밀·무거움)"],e:"형상별 콜라이더. Mesh는 정밀하나 연산 비쌈."},
{d:"PHYS",f:"match",q:"Raycast 파라미터와 의미를 짝지으시오.",left:["origin","direction","maxDistance","layerMask"],right:["광선 시작점","광선 방향","탐지 최대 거리","탐지 대상 레이어 필터"],e:"레이캐스트 인자 구성."},
{d:"PHYS",f:"hotspot",q:"오브젝트에 중력을 적용/해제하는 체크박스는?",tmpl:"inspector",ans:"rb-usegravity",e:"Rigidbody의 Use Gravity 체크박스로 중력을 제어한다."},
{d:"PHYS",f:"hotspot",q:"물리엔진이 힘으로 움직이지 않고 스크립트로 직접 제어하게 하는 옵션은?",tmpl:"inspector",ans:"rb-iskinematic",e:"Is Kinematic을 켜면 물리력 대신 Transform으로 직접 제어한다."},

/* ===== Animation (8) ===== */
{d:"ANIM",f:"mc",q:"Animator에서 상태(State) 간 전환 조건을 결정하는 요소는?",opts:["Sprite","Parameter","Prefab","Material"],ans:1,e:"Parameter(bool/int/float/trigger) 값으로 Transition 조건을 판단한다."},
{d:"ANIM",f:"mc",q:"Animator Controller의 역할은?",opts:["오디오 재생","애니메이션 상태·전환을 관리하는 에셋","조명 계산","빌드 설정"],ans:1,e:"State/Transition/Parameter를 담는 상태 기계 에셋이다."},
{d:"ANIM",f:"mc",q:"어느 상태에서든 특정 상태로 전이할 수 있게 하는 특수 상태는?",opts:["Entry","Any State","Exit","Base Layer"],ans:1,e:"Any State는 현재 상태와 무관하게 전이(피격 등)에 쓰인다."},
{d:"ANIM",f:"mc",q:"Animator Parameter 타입이 아닌 것은?",opts:["bool","int","float","string"],ans:3,e:"파라미터는 bool/int/float/trigger. string은 없다."},
{d:"ANIM",f:"mc",q:"스크립트에서 bool 파라미터로 애니메이션을 전환하는 호출은?",opts:["animator.Play()","animator.SetBool()","animator.Stop()","animator.AddClip()"],ans:1,e:"animator.SetBool(\"isRunning\", true) 식으로 값을 바꾼다."},
{d:"ANIM",f:"order",q:"Idle→Run 전환을 만드는 작업 순서를 배열하시오.",items:["Animation State 배치","Parameter(isRunning) 추가","Transition 생성","Transition 조건 설정"],e:"상태 배치→파라미터→전환 생성→조건 설정."},
{d:"ANIM",f:"order",q:"외부 애니메이션 클립을 게임에 적용하는 순서를 배열하시오.",items:["애니메이션 클립 임포트","Animator Controller 생성","Controller에 State로 배치","GameObject의 Animator에 Controller 연결"],e:"임포트→컨트롤러 생성→상태 배치→연결."},
{d:"ANIM",f:"order",q:"두 상태 사이 전환 흐름을 배열하시오.",items:["파라미터 값 변경(SetBool)","Transition 조건 충족","다음 State로 전이"],e:"값 변경→조건 충족→전이."},

/* ===== Asset Management (8) ===== */
{d:"ASSET",f:"mc",q:"Prefab이란 무엇인가?",opts:["일회용 씬","재사용 가능한 오브젝트 템플릿","코드 라이브러리","빌드 파일"],ans:1,e:"Prefab은 재사용·인스턴스화되는 오브젝트 원본이다."},
{d:"ASSET",f:"mc",q:"Prefab 인스턴스의 변경을 원본에 반영하려면?",opts:["Delete","Overrides → Apply","Rename","Duplicate"],ans:1,e:"Overrides의 Apply로 원본 프리팹에 반영한다."},
{d:"ASSET",f:"mc",q:"3D 모델의 대표적 임포트 파일 포맷은?",opts:[".mp3",".fbx",".png",".cs"],ans:1,e:"FBX가 모델 임포트의 표준 포맷이다."},
{d:"ASSET",f:"mc",q:"각 에셋 옆에 생성되는 .meta 파일의 역할은?",opts:["에셋 백업","임포트 설정·GUID 등 메타데이터 저장","실행 파일","로그 기록"],ans:1,e:".meta는 임포트 설정과 참조용 GUID를 담는다."},
{d:"ASSET",f:"mc",q:"오디오 클립을 프로젝트에 넣을 때 관리하는 대표 압축 개념은?",opts:["Compression Format(예: Vorbis/PCM)","Polygon Count","Anchor","LayerMask"],ans:0,e:"오디오는 압축 포맷 설정으로 용량·품질을 조절한다."},
{d:"ASSET",f:"match",q:"에셋 종류와 파일/역할을 짝지으시오.",left:["Prefab","Scene","Material","Script"],right:["재사용 오브젝트 템플릿","오브젝트 배치 저장","표면 렌더링 정의","동작 로직(C#)"],e:"에셋 유형별 역할."},
{d:"ASSET",f:"match",q:"GameObject 관련 개념을 짝지으시오.",left:["GameObject","Component","Empty GameObject","Prefab Instance"],right:["씬의 기본 개체","기능을 부여하는 부품","컴포넌트 컨테이너로 흔히 사용","원본에서 복제된 개체"],e:"오브젝트-컴포넌트 관계."},
{d:"ASSET",f:"match",q:"파일 포맷과 용도를 짝지으시오.",left:[".fbx",".png",".wav",".cs"],right:["3D 모델","텍스처 이미지","오디오","스크립트"],e:"확장자별 에셋 용도."},

/* ===== User Interface (7) ===== */
{d:"UI",f:"mc",q:"화면에 고정되는 HUD(체력·점수)에 적합한 Canvas Render Mode는?",opts:["World Space","Screen Space - Overlay","Screen Space - Camera(원근용)","없음"],ans:1,e:"Overlay는 화면 좌표 기준으로 UI를 덧그려 HUD에 적합."},
{d:"UI",f:"mc",q:"UI 요소의 위치·크기를 제어하는 컴포넌트는?",opts:["Transform","Rect Transform","Rigidbody","Mesh Filter"],ans:1,e:"UI는 Rect Transform으로 앵커·피벗 기반 배치한다."},
{d:"UI",f:"mc",q:"앵커(Anchor)의 역할은?",opts:["색상 지정","부모 대비 기준점 설정(해상도 대응)","오디오 볼륨","물리 충돌"],ans:1,e:"앵커로 부모 기준 상대 위치를 정해 다양한 해상도에 대응."},
{d:"UI",f:"mc",q:"연속값(예: 볼륨)을 입력받는 UI 요소는?",opts:["Button","Slider","Image","Text"],ans:1,e:"Slider는 연속값 입력에 쓰인다."},
{d:"UI",f:"mc",q:"모든 UI 요소의 최상위 렌더 영역은?",opts:["Panel","Canvas","Camera","Layer"],ans:1,e:"UI는 Canvas 하위에 배치되어 렌더된다."},
{d:"UI",f:"match",q:"UI 요소와 역할을 짝지으시오.",left:["Canvas","Rect Transform","Button","Slider"],right:["UI 최상위 렌더 영역","위치·크기 제어","클릭 상호작용","연속값 입력"],e:"UI 요소별 역할."},
{d:"UI",f:"match",q:"Canvas Render Mode와 용도를 짝지으시오.",left:["Screen Space - Overlay","Screen Space - Camera","World Space"],right:["화면 위 HUD","카메라 기준 원근 UI","3D 공간 내 UI(머리 위 이름표)"],e:"렌더 모드별 용도."},

/* ===== Lighting (7) ===== */
{d:"LIGHT",f:"mc",q:"태양광처럼 모든 오브젝트에 평행하게 쏟아지는 라이트 타입은?",opts:["Point","Spot","Directional","Area"],ans:2,e:"Directional은 방향만 있는 평행광(위치 무관)."},
{d:"LIGHT",f:"mc",q:"라이트맵 베이킹(Baking)의 주된 목적은?",opts:["실시간 물리","조명을 사전 계산해 런타임 성능 향상","오디오 개선","네트워크 동기화"],ans:1,e:"정적 조명을 미리 구워 런타임 부하를 줄인다."},
{d:"LIGHT",f:"mc",q:"빌트인 렌더러에서 실시간을 지원하지 않고 주로 베이크로 쓰는 라이트는?",opts:["Directional","Point","Spot","Area"],ans:3,e:"Area Light는 베이크 전용(빌트인)."},
{d:"LIGHT",f:"mc",q:"그림자를 부드럽게/딱딱하게 조절하는 설정은?",opts:["Shadow Type(Hard/Soft)","Mass","Albedo","Drag"],ans:0,e:"Shadow Type으로 Hard/Soft 그림자를 선택한다."},
{d:"LIGHT",f:"match",q:"라이트 타입과 특성을 짝지으시오.",left:["Directional","Point","Spot","Area"],right:["평행광(태양)","전방향 점광원(전구)","원뿔 범위 집중","면광원(베이크 전용)"],e:"라이트 타입별 특성."},
{d:"LIGHT",f:"match",q:"라이트 설정과 효과를 짝지으시오.",left:["Intensity","Range","Spot Angle","Color"],right:["밝기","도달 거리","원뿔 각도","빛의 색"],e:"라이트 파라미터."},
{d:"LIGHT",f:"match",q:"GI/베이킹 용어를 짝지으시오.",left:["Baked GI","Realtime GI","Lightmap"],right:["사전 계산 조명","런타임 계산 조명","구운 조명 정보를 담는 텍스처"],e:"전역 조명 관련 용어."},

/* ===== Audio (5) ===== */
{d:"AUDIO",f:"mc",q:"멀어지는 사이렌처럼 상대 속도로 음높이가 변하는 효과는?",opts:["Reverb","Doppler Effect","Echo","Chorus"],ans:1,e:"Doppler는 상대 속도에 따른 피치 변화."},
{d:"AUDIO",f:"mc",q:"오디오를 반복 재생하게 하는 설정은?",opts:["Loop","Mute","Solo","Bypass"],ans:0,e:"Audio Source의 Loop로 반복 재생한다."},
{d:"AUDIO",f:"mc",q:"소리를 2D↔3D(거리감)로 조절하는 Audio Source 설정은?",opts:["Spatial Blend","Priority","Stereo Pan","Pitch"],ans:0,e:"Spatial Blend로 2D/3D 공간감을 조절한다."},
{d:"AUDIO",f:"match",q:"오디오 컴포넌트와 역할을 짝지으시오.",left:["Audio Source","Audio Listener","Audio Mixer","Reverb Zone"],right:["소리 재생 주체","소리를 듣는 지점(주로 카메라)","여러 소리 믹싱·라우팅","공간 잔향 적용 영역"],e:"오디오 컴포넌트 구성."},
{d:"AUDIO",f:"mc",q:"같은 효과음(예: 발소리)을 짧은 간격으로 여러 번 겹쳐 재생할 때 자연스럽게 처리하는 방법은?",opts:["Loop 체크","AudioSource.PlayOneShot() 사용","Mute 후 재생","Spatial Blend를 2D로"],ans:1,e:"PlayOneShot()은 재생 중인 소리를 끊지 않고 새 소리를 겹쳐 재생해 반복 효과음에 적합하다."},

/* ===== Materials & Effects (5) ===== */
{d:"MAT",f:"mc",q:"머티리얼이 스스로 빛을 내뿜는(발광) 것처럼 밝게 보이게 하는 Standard Shader 속성은?",opts:["Albedo","Emission","Metallic","Normal Map"],ans:1,e:"Emission은 표면이 스스로 빛나는 발광 효과를 준다(Bloom·베이크 GI와 함께 쓰면 주변까지 밝힘)."},
{d:"MAT",f:"mc",q:"불꽃·연기처럼 다수의 작은 입자 효과를 만드는 컴포넌트는?",opts:["Line Renderer","Particle System","Sprite Renderer","Trail Renderer"],ans:1,e:"Particle System으로 입자 효과를 만든다."},
{d:"MAT",f:"match",q:"셰이더 속성과 설명을 짝지으시오.",left:["Albedo","Metallic","Smoothness","Normal Map"],right:["기본 색/텍스처","금속성 정도","광택(매끄러움)","표면 요철 표현"],e:"Standard Shader 속성."},
{d:"MAT",f:"match",q:"Particle System 모듈과 역할을 짝지으시오.",left:["Emission","Shape","Lifetime","Velocity"],right:["방출량/방출률","방출 형태","입자 수명","입자 속도"],e:"파티클 모듈 구성."},
{d:"MAT",f:"hotspot",q:"머티리얼의 기본 색(Albedo)을 바꾸려면 Inspector의 어느 필드를 클릭하는가?",tmpl:"inspector",ans:"mat-albedo",e:"Material 섹션의 Albedo 색상 필드에서 변경한다."},

/* ===== Services (5) ===== */
{d:"SVC",f:"mc",q:"플레이어 행동 데이터를 수집·분석해 이탈 지점을 파악하는 서비스는?",opts:["Unity Ads","Unity Analytics","Unity Cloud Build","Asset Store"],ans:1,e:"Analytics로 플레이어 데이터를 분석한다."},
{d:"SVC",f:"mc",q:"코드 커밋 시 자동으로 여러 플랫폼 빌드를 만드는 서비스는?",opts:["Cloud Build","Ads","Analytics","Reverb"],ans:0,e:"Cloud Build가 자동·다중 플랫폼 빌드를 수행한다."},
{d:"SVC",f:"mc",q:"게임 내 광고로 수익화하는 서비스는?",opts:["Unity Ads","Unity Analytics","NavMesh","Lightmap"],ans:0,e:"Unity Ads로 광고 수익화를 구현한다."},
{d:"SVC",f:"match",q:"Unity 서비스와 기능을 짝지으시오.",left:["Ads","Analytics","Cloud Build","Version Control"],right:["광고 수익화","데이터 분석","자동 빌드","팀 협업·형상관리"],e:"Version Control(구 Collaborate/Plastic SCM)은 팀 형상관리 서비스다."},
{d:"SVC",f:"match",q:"수익화·운영 개념을 짝지으시오.",left:["In-App Purchase","Ads","Analytics"],right:["앱 내 결제","광고 노출","지표 측정"],e:"수익화·운영 서비스."},

/* ===== Game Design (4) ===== */
{d:"GDES",f:"mc",q:"실시간 전략(RTS) 장르의 특징으로 옳은 것은?",opts:["턴을 번갈아 진행","자원 관리와 유닛 실시간 조작","1인칭 슈팅 고정","텍스트 입력 전용"],ans:1,e:"RTS는 실시간 자원·유닛 운용이 핵심."},
{d:"GDES",f:"mc",q:"3인칭 시점(Third Person)의 특징은?",opts:["카메라가 캐릭터 눈","카메라가 캐릭터 뒤/외부에서 캐릭터를 봄","화면에 캐릭터 없음","2D 전용"],ans:1,e:"3인칭은 캐릭터를 외부 시점에서 본다."},
{d:"GDES",f:"mc",q:"게임 메커니즘(Mechanic)이란?",opts:["게임의 그래픽 스타일","플레이어 행동과 규칙의 상호작용 체계","배경 음악","저장 포맷"],ans:1,e:"메커니즘은 행동·규칙의 상호작용 체계다."},
{d:"GDES",f:"mc",q:"캐주얼 게임의 일반적 특징은?",opts:["높은 진입장벽","짧고 단순하며 접근성 높음","전용 컨트롤러 필수","오프라인 불가"],ans:1,e:"캐주얼은 단순·접근성 중심."},

/* ===== Project Management (4) ===== */
{d:"PMGT",f:"mc",q:"Layer의 대표적 기능은?",opts:["오브젝트 개별 식별","렌더링/충돌 등을 그룹으로 구분·필터","색상 지정","오디오 라우팅"],ans:1,e:"Layer는 렌더/충돌 그룹 구분·마스킹에 쓰인다."},
{d:"PMGT",f:"mc",q:"Tag의 대표적 용도는?",opts:["오브젝트를 이름표로 식별(예: Player)","조명 계산","물리 질량","셰이더 속성"],ans:0,e:"Tag는 오브젝트 식별·검색에 사용."},
{d:"PMGT",f:"match",q:"프로젝트 관리 개념을 짝지으시오.",left:["Layer","Tag","Transform","Component"],right:["그룹 구분(렌더/충돌)","개체 식별 라벨","위치·회전·크기","기능 부품"],e:"관리용 개념 구분."},
{d:"PMGT",f:"mc",q:"부모(Parent) 오브젝트를 이동시키면 자식(Child) 오브젝트는 어떻게 되는가?",opts:["그 자리에 멈춰 있다","부모를 따라 함께 이동한다","씬에서 사라진다","크기만 바뀐다"],ans:1,e:"자식은 부모의 Transform을 기준(로컬 좌표)으로 하므로, 부모가 이동·회전하면 함께 따라간다."},

/* ===== Game Art (3) ===== */
{d:"GART",f:"mc",q:"컨셉 아트(Concept Art)의 목적은?",opts:["최종 출시 빌드","개발 전 룩앤필·방향성 제시","버그 추적","서버 부하 측정"],ans:1,e:"컨셉 아트로 시각적 방향을 사전 공유한다."},
{d:"GART",f:"mc",q:"색채(Color Palette)가 게임에 미치는 주요 영향은?",opts:["프레임률 향상","분위기(mood)와 정서 전달","물리 정확도","저장 용량 감소"],ans:1,e:"색채 선택은 분위기·정서를 좌우한다."},
{d:"GART",f:"mc",q:"모델 에셋 최적화 방법으로 옳은 것은?",opts:["폴리곤 수·텍스처 크기 적절히 축소","항상 최대 해상도 유지","콜라이더 제거","레이어 삭제"],ans:0,e:"폴리곤·텍스처 최적화로 성능을 확보한다."},

/* ===== Navigation (3) ===== */
{d:"NAV",f:"mc",q:"NavMesh의 기능은?",opts:["조명 굽기","이동 가능 영역을 정의해 경로 탐색","오디오 믹싱","UI 배치"],ans:1,e:"NavMesh는 이동 가능 표면을 정의한다."},
{d:"NAV",f:"mc",q:"NavMesh 베이크의 Max Slope 설정 의미는?",opts:["최대 밝기","에이전트가 오를 수 있는 최대 경사","최대 속도","최대 폴리곤"],ans:1,e:"Max Slope는 오를 수 있는 경사 한계다."},
{d:"NAV",f:"match",q:"내비게이션 용어를 짝지으시오.",left:["NavMesh","NavMesh Agent","Obstacle","Max Slope"],right:["이동 가능 영역","경로 따라 이동하는 개체","회피 대상 장애물","오를 수 있는 경사 한계"],e:"패스파인딩 구성 요소."},

/* ===== Employment (3) ===== */
{d:"EMP",f:"mc",q:"미공개 프로젝트 정보 유출을 막기 위해 입사 시 서명하는 문서는?",opts:["EULA","NDA(비밀유지계약)","SDK","API"],ans:1,e:"NDA로 기밀 정보를 보호한다."},
{d:"EMP",f:"mc",q:"IP(지식재산)의 의미로 옳은 것은?",opts:["인터넷 주소","창작물에 대한 법적 권리","입력 장치","이미지 파일"],ans:1,e:"IP는 창작·지식재산에 대한 권리."},
{d:"EMP",f:"mc",q:"게임 개발에서 크리틱(critique)의 의미는?",opts:["단순 비난","건설적 피드백으로 작업을 개선하는 과정","일정 관리","버전 관리"],ans:1,e:"크리틱은 개선을 위한 건설적 피드백이다."},

/* ===== Industry (3) ===== */
{d:"IND",f:"mc",q:"QA(Quality Assurance) 담당의 역할은?",opts:["사운드 작곡","게임 테스트로 버그·이슈 발견 및 피드백","마케팅","서버 구축"],ans:1,e:"QA는 테스트로 품질을 검증한다."},
{d:"IND",f:"mc",q:"게임 프로덕션 단계 순서로 자연스러운 것은?",opts:["Pre-production → Production → Post-production","Production → Pre-production → Post","Post → Production → Pre","순서 무관"],ans:0,e:"기획(전)→제작→마무리(후) 순."},
{d:"IND",f:"mc",q:"콘솔 하드웨어를 구분하는 기준으로 적절한 것은?",opts:["작곡 스타일","성능·입력장치·플랫폼 특성","폰트 종류","할인율"],ans:1,e:"콘솔은 성능·컨트롤러·플랫폼 특성으로 구분한다."},
/* ===== 확장 문항 (+28, 공식 출제비중 정렬) ===== */
{d:"EDITOR",f:"mc",lvl:"中",q:"여러 오브젝트를 한꺼번에 선택해 공통 속성을 동시에 편집하려면?",opts:["불가능하다","Hierarchy에서 Ctrl(⌘)/Shift로 다중 선택 후 편집","Project 창에서만 가능","프리팹으로 먼저 묶어야 한다"],ans:1,e:"Hierarchy에서 Ctrl(⌘)/Shift로 여러 개를 선택하면 Inspector에서 공통 속성을 한 번에 편집한다."},
{d:"EDITOR",f:"mc",lvl:"中",q:"Scene 뷰에서 선택한 오브젝트로 카메라를 즉시 이동(포커스)하는 단축키는?",opts:["F","G","P","M"],ans:0,e:"오브젝트 선택 후 F키를 누르면 Scene 카메라가 대상에 포커스한다."},
{d:"EDITOR",f:"mc",lvl:"下",q:"Play 버튼 옆 Pause 버튼의 역할은?",opts:["빌드 중지","Play Mode를 일시정지(프레임 확인)","씬 저장","오브젝트 삭제"],ans:1,e:"Pause는 실행 중인 Play Mode를 멈춰 상태를 확인하게 한다."},
{d:"EDITOR",f:"mc",lvl:"下",q:"이동·회전·크기 도구 기본 단축키 W/E/R 중 '회전' 도구는?",opts:["W","E","R","T"],ans:1,e:"W=이동, E=회전, R=크기(Q=화면 이동, T=Rect)."},
{d:"EDITOR",f:"hotspot",lvl:"中",q:"실행 중 플레이어가 실제로 보는 최종 화면을 미리 보는 탭은?",tmpl:"editor",ans:"game",e:"Game 탭이 렌더 카메라 기준 실제 플레이 화면을 보여준다."},
{d:"PROG",f:"mc",lvl:"中",q:"'Player' 태그를 가진 오브젝트를 코드로 찾는 API는?",opts:["GameObject.Find()","GameObject.FindWithTag(\"Player\")","GetComponent()","Instantiate()"],ans:1,e:"FindWithTag로 태그 기반 검색을 한다(매 프레임 호출은 성능상 지양)."},
{d:"PROG",f:"mc",lvl:"上",q:"코루틴에서 1초 기다린 뒤 다음 줄을 실행하려면?",opts:["Wait(1)","yield return new WaitForSeconds(1f)","Thread.Sleep(1000)","delay 1"],ans:1,e:"코루틴은 yield return new WaitForSeconds(1f)로 지정 시간 대기 후 이어 실행한다."},
{d:"PROG",f:"mc",lvl:"中",q:"[SerializeField] private 변수의 효과는?",opts:["코드에서 접근 불가","private을 유지하면서 Inspector에 노출·저장","자동 상수화","렌더링에서 제외"],ans:1,e:"[SerializeField]는 캡슐화(private)를 지키면서 Inspector에 노출한다."},
{d:"PHYS",f:"mc",lvl:"上",q:"Rigidbody에 순간적인 점프 힘을 주는 적절한 방법은?",opts:["transform.position을 직접 변경","AddForce(..., ForceMode.Impulse)","Scale을 키움","Time.deltaTime을 곱함"],ans:1,e:"순간 힘은 AddForce에 ForceMode.Impulse. 위치 직접 변경은 물리 충돌을 무시한다."},
{d:"PHYS",f:"mc",lvl:"中",q:"OnCollisionEnter와 OnTriggerEnter의 차이로 옳은 것은?",opts:["완전히 동일하다","Collision은 물리 충돌 반응이 있고, Trigger는 겹침만 감지","Trigger가 더 무겁다","Collision은 2D 전용"],ans:1,e:"isTrigger가 꺼진 접촉은 OnCollisionEnter(반응 O), 켜지면 OnTriggerEnter(겹침 감지)."},
{d:"ANIM",f:"mc",lvl:"中",q:"걷기→달리기처럼 파라미터에 따라 애니메이션을 부드럽게 혼합하는 것은?",opts:["오디오 믹싱","Blend Tree","라이트 베이크","Canvas"],ans:1,e:"Blend Tree는 속도 등 파라미터 값에 따라 여러 클립을 연속적으로 혼합한다."},
{d:"ANIM",f:"mc",lvl:"上",q:"발이 땅에 닿는 특정 프레임에 소리를 재생하도록 애니메이션에 함수를 거는 기능은?",opts:["Animation Event","Collider","NavMesh","Prefab"],ans:0,e:"Animation Event로 클립의 특정 프레임에서 함수를 호출할 수 있다."},
{d:"ASSET",f:"mc",lvl:"中",q:"Prefab Variant(프리팹 변형)의 개념으로 옳은 것은?",opts:["원본 프리팹을 상속해 일부만 다르게 만든 변형","완전 독립 복사본","씬 파일의 일종","스크립트 템플릿"],ans:0,e:"Prefab Variant는 베이스 프리팹을 상속받아 차이점만 재정의한다."},
{d:"ASSET",f:"mc",lvl:"下",q:"임포트한 텍스처의 압축·최대 크기 설정을 바꾸는 창은?",opts:["Console","Inspector","Hierarchy","Game 뷰"],ans:1,e:"에셋을 선택하면 Inspector에 임포트 설정이 나타난다."},
{d:"UI",f:"mc",lvl:"中",q:"여러 해상도에서 UI가 비례해 커지고 작아지게 하는 컴포넌트는?",opts:["Canvas Scaler","Rigidbody","Light","NavMesh"],ans:0,e:"Canvas Scaler의 Scale With Screen Size로 해상도 대응 스케일링을 한다."},
{d:"UI",f:"mc",lvl:"下",q:"버튼을 눌렀을 때 실행할 함수를 연결하는 곳은?",opts:["Button의 OnClick() 이벤트","Rigidbody","Animator","Console"],ans:0,e:"Button 컴포넌트의 OnClick() 리스트에 대상 오브젝트와 함수를 등록한다."},
{d:"UI",f:"mc",lvl:"中",q:"확대해도 글자가 선명하고 서식이 풍부한 Unity 텍스트 솔루션은?",opts:["물리 텍스트","TextMeshPro","Legacy GUIText","Console 로그"],ans:1,e:"TextMeshPro는 SDF 기반이라 확대해도 선명하고 외곽선·그림자 등 서식이 풍부하다."},
{d:"LIGHT",f:"mc",lvl:"中",q:"움직이지 않는 오브젝트를 라이트맵 베이크 대상으로 포함하려면?",opts:["오브젝트를 Static(Contribute GI)으로 표시","Is Kinematic 켜기","Is Trigger 켜기","Convex 켜기"],ans:0,e:"오브젝트를 Static(Contribute GI)으로 표시해야 베이크에 포함된다."},
{d:"LIGHT",f:"mc",lvl:"上",q:"동적 캐릭터가 베이크된 정적 조명 속에서도 자연스러운 음영을 받게 하는 요소는?",opts:["Light Probe","NavMesh","Collider","Canvas"],ans:0,e:"Light Probe가 공간의 베이크 조명을 샘플링해 동적 오브젝트에 적용한다."},
{d:"AUDIO",f:"mc",lvl:"中",q:"배경음악과 효과음 볼륨을 그룹 단위로 따로 조절하려면?",opts:["Audio Mixer의 그룹 사용","각 소스를 개별로만 조절","Reverb Zone","Doppler"],ans:0,e:"Audio Mixer에 BGM/SFX 그룹을 만들어 그룹 단위로 볼륨을 라우팅·조절한다."},
{d:"AUDIO",f:"mc",lvl:"下",q:"3D 사운드에서 소리가 멀어질수록 작아지는 감쇠를 정의하는 곡선은?",opts:["Volume Rolloff","Pitch","Loop","Bypass"],ans:0,e:"Volume Rolloff(거리 감쇠 곡선)로 거리별 음량을 정의한다."},
{d:"MAT",f:"mc",lvl:"中",q:"유리처럼 뒤가 비치는 반투명 재질을 만들려면 무엇을 바꾸나?",opts:["Rendering Mode를 Transparent로","Metallic을 1로","Normal Map 제거","Loop 켜기"],ans:0,e:"Standard Shader의 Rendering Mode를 Transparent(또는 Fade)로 바꾸고 알파를 조절한다."},
{d:"MAT",f:"mc",lvl:"上",q:"금속 표면을 사실적으로 표현할 때 함께 조절하는 두 속성은?",opts:["Metallic과 Smoothness","Albedo와 Loop","Mass와 Drag","Range와 Intensity"],ans:0,e:"PBR에서 금속감은 Metallic↑과 Smoothness(광택)↑를 함께 조절해 표현한다."},
{d:"SVC",f:"mc",lvl:"中",q:"게임 내 아이템 판매(인앱결제)를 구현하는 Unity 서비스는?",opts:["In-App Purchasing(IAP)","Analytics","NavMesh","Lightmap"],ans:0,e:"Unity IAP로 앱스토어 인앱결제를 구현한다."},
{d:"GDES",f:"mc",lvl:"中",q:"게임의 코어 루프(Core Loop)란?",opts:["로딩 화면 순서","플레이어가 반복하는 핵심 행동 사이클","데이터 저장 방식","렌더링 순서"],ans:1,e:"코어 루프는 '행동→보상→성장'처럼 반복되는 핵심 플레이 사이클이다."},
{d:"PMGT",f:"mc",lvl:"上",q:"특정 Layer끼리만 물리 충돌이 일어나게 제어하는 설정은?",opts:["Layer Collision Matrix","Tag","Sorting Layer","Prefab"],ans:0,e:"Project Settings의 Layer Collision Matrix로 어떤 레이어끼리 충돌할지 지정한다."},
{d:"GART",f:"mc",lvl:"上",q:"여러 텍스처를 한 장에 모아 드로우콜을 줄이는 기법은?",opts:["Texture Atlas(아틀라스)","Raycast","라이트 베이크","NavMesh"],ans:0,e:"텍스처 아틀라스로 여러 이미지를 한 장에 합쳐 배치·드로우콜을 절감한다."},
{d:"NAV",f:"mc",lvl:"上",q:"떨어진 NavMesh 영역(점프·사다리 등)을 이어 에이전트가 건너가게 하는 요소는?",opts:["Off-Mesh Link","Collider","Light Probe","Canvas"],ans:0,e:"Off-Mesh Link로 분리된 NavMesh 구간을 연결한다."},
/* ===== 배치 확장 문항 (+51, 개념 다양화) ===== */
{d:"EDITOR",f:"mc",lvl:"下",q:"직전 작업을 되돌리는(Undo) 기본 단축키는?",opts:["Ctrl(⌘)+Z","Ctrl+S","Ctrl+P","Alt+F4"],ans:0,e:"Ctrl(⌘)+Z로 마지막 작업을 취소한다. 다시 실행은 Ctrl+Y(⌘+Shift+Z)."},
{d:"EDITOR",f:"mc",lvl:"下",q:"선택한 오브젝트를 그대로 하나 더 복제하는 단축키는?",opts:["Ctrl(⌘)+D","Ctrl+X","Ctrl+F","Ctrl+G"],ans:0,e:"Ctrl(⌘)+D로 선택 오브젝트를 복제한다."},
{d:"EDITOR",f:"mc",lvl:"中",q:"이동 도구로 드래그할 때 격자 간격에 맞춰 딱딱 끊어 이동시키려면(Windows)?",opts:["Shift를 누른 채 드래그","Ctrl을 누른 채 드래그","Alt을 누른 채 드래그","Tab을 누른 채 드래그"],ans:1,e:"Windows에서 Ctrl(맥은 ⌘)을 누른 채 이동하면 Grid and Snap 설정 간격으로 스냅된다."},
{d:"EDITOR",f:"mc",lvl:"中",q:"프리팹의 원본 자체를 여는(편집 모드 진입) 일반적 방법은?",opts:["Console에서 우클릭","Project에서 프리팹 더블클릭 또는 Inspector의 Open","Game 뷰에서 클릭","빌드하기"],ans:1,e:"Project의 프리팹을 더블클릭(또는 Open Prefab)하면 프리팹 편집 모드로 들어간다."},
{d:"EDITOR",f:"mc",lvl:"下",q:"Scene 뷰를 2D/3D 시점으로 전환하는 토글은 어디에 있나?",opts:["Scene 뷰 상단 툴바의 2D 버튼","Console 창","Project 창","Inspector 하단"],ans:0,e:"Scene 뷰 상단 툴바의 2D 토글로 평면/입체 시점을 전환한다."},
{d:"EDITOR",f:"mc",lvl:"上",q:"이동 기즈모의 축을 오브젝트 자체 방향(Local)과 월드 방향(Global)으로 바꾸는 토글은?",opts:["Pivot/Center 토글","Local/Global 토글","Layers 토글","Gizmos 토글"],ans:1,e:"툴바의 Local/Global 토글로 조작 축 기준을 오브젝트 로컬축과 월드축 사이에서 전환한다."},
{d:"EDITOR",f:"mc",lvl:"中",q:"스크립트를 수정·저장하고 Unity 에디터로 돌아오면 일어나는 일은?",opts:["자동으로 스크립트를 컴파일한다","씬이 삭제된다","빌드가 실행된다","아무 일도 없다"],ans:0,e:"에디터로 포커스가 돌아오면 변경된 스크립트를 자동 컴파일한다(우하단 스피너)."},
{d:"PROG",f:"mc",lvl:"下",q:"게임 오브젝트를 코드로 제거하는 API는?",opts:["Remove()","Destroy(gameObject)","Delete()","Clear()"],ans:1,e:"Destroy(gameObject)로 오브젝트를 파괴한다(2번째 인자로 지연 시간 지정 가능)."},
{d:"PROG",f:"mc",lvl:"下",q:"콘솔 창에 값을 출력해 디버깅하는 코드는?",opts:["print.console()","Debug.Log()","Console.Write()","Trace()"],ans:1,e:"Debug.Log()로 Console 창에 메시지를 출력한다."},
{d:"PROG",f:"mc",lvl:"中",q:"Transform을 통해 오브젝트를 지정 방향으로 이동시키는 메서드는?",opts:["transform.Move()","transform.Translate()","transform.Shift()","transform.Go()"],ans:1,e:"transform.Translate(방향*속도*Time.deltaTime)로 이동시킨다."},
{d:"PROG",f:"mc",lvl:"上",q:"키를 '누르고 있는 동안' 매 프레임 참을 반환하는 입력 함수는?",opts:["Input.GetKeyDown","Input.GetKey","Input.GetKeyUp","Input.AnyKey"],ans:1,e:"GetKey는 누르는 중 매 프레임 true, GetKeyDown은 눌린 그 프레임만, GetKeyUp은 뗀 프레임만 true."},
{d:"PROG",f:"mc",lvl:"中",q:"코루틴을 실제로 시작(구동)시키는 호출은?",opts:["RunCoroutine()","StartCoroutine()","yield()","Invoke()"],ans:1,e:"StartCoroutine(MyRoutine())로 코루틴을 시작한다."},
{d:"PROG",f:"mc",lvl:"中",q:"값을 지정한 최소·최대 범위 안으로 제한하는 함수는?",opts:["Mathf.Clamp","Mathf.Abs","Mathf.Round","Mathf.Pow"],ans:0,e:"Mathf.Clamp(값, 최소, 최대)로 범위를 벗어나지 않게 제한한다."},
{d:"PHYS",f:"mc",lvl:"中",q:"공이 바닥에 튀는 정도(반발력)나 마찰을 정의하는 에셋은?",opts:["Physic Material","Animator Controller","NavMesh","Light Probe"],ans:0,e:"Physic Material의 Bounciness·Friction으로 튐과 마찰을 정의해 콜라이더에 적용한다."},
{d:"PHYS",f:"mc",lvl:"上",q:"빠르게 움직이는 물체가 얇은 벽을 뚫고 지나가는(터널링) 문제를 줄이는 Rigidbody 설정은?",opts:["Collision Detection을 Continuous로","Mass를 0으로","Is Kinematic 켜기","Drag를 최대로"],ans:0,e:"Collision Detection을 Continuous(연속 충돌 검사)로 두면 고속 물체의 관통을 줄인다."},
{d:"PHYS",f:"mc",lvl:"中",q:"프로젝트 전체의 중력 방향·세기를 바꾸는 곳은?",opts:["Project Settings > Physics의 Gravity","각 오브젝트의 Scale","Lighting 설정","Audio Mixer"],ans:0,e:"Project Settings > Physics의 Gravity(기본 Y=-9.81)에서 전역 중력을 설정한다."},
{d:"PHYS",f:"mc",lvl:"中",q:"Rigidbody가 특정 축으로 이동·회전하지 못하게 고정하는 설정은?",opts:["Constraints(Freeze Position/Rotation)","Interpolate","Layer","Tag"],ans:0,e:"Rigidbody의 Constraints로 특정 축의 이동·회전을 잠근다(예: 2D처럼 Z 고정)."},
{d:"PHYS",f:"mc",lvl:"上",q:"한 점 주변 구 범위 안의 콜라이더들을 한꺼번에 찾는 API는?",opts:["Physics.Raycast","Physics.OverlapSphere","Physics.Gravity","Physics.Simulate"],ans:1,e:"Physics.OverlapSphere(중심, 반지름)로 범위 내 콜라이더 배열을 얻는다(폭발 범위 판정 등)."},
{d:"ANIM",f:"mc",lvl:"下",q:"애니메이션 클립을 반복 재생되게 하는 임포트 설정은?",opts:["Loop Time","Root Motion","Has Exit Time","Mirror"],ans:0,e:"클립의 Loop Time을 켜면 반복 재생된다."},
{d:"ANIM",f:"mc",lvl:"中",q:"Transition의 'Has Exit Time'이 켜져 있으면?",opts:["즉시 전이","현재 애니메이션이 지정 지점까지 재생된 뒤 전이","전이하지 않음","역재생"],ans:1,e:"Has Exit Time이 켜지면 현재 클립이 정해진 시점까지 재생된 후에 다음 상태로 전이한다."},
{d:"ANIM",f:"mc",lvl:"上",q:"애니메이션이 캐릭터의 실제 위치 이동까지 담당하게 하는 기능은?",opts:["Root Motion","Blend Tree","Any State","Avatar Mask"],ans:0,e:"Root Motion을 켜면 애니메이션 클립의 움직임이 오브젝트의 실제 이동으로 적용된다."},
{d:"ANIM",f:"mc",lvl:"上",q:"상체는 총 쏘고 하체는 걷는 것처럼 신체 부위별로 애니메이션을 분리 적용하려면?",opts:["Animation Layer + Avatar Mask","Blend Tree 하나","NavMesh","Particle System"],ans:0,e:"Animator Layer에 Avatar Mask를 적용해 신체 부위별로 다른 애니메이션을 겹쳐 재생한다."},
{d:"ASSET",f:"mc",lvl:"中",q:"코드에서 경로 문자열로 런타임에 불러오도록 에셋을 담아두는 특수 폴더는?",opts:["Resources","Editor","Gizmos","StreamingAssets"],ans:0,e:"Resources 폴더의 에셋은 Resources.Load(\"경로\")로 런타임에 불러올 수 있다."},
{d:"ASSET",f:"mc",lvl:"中",q:"외부 패키지·Unity 기능 모듈을 설치·업데이트·삭제하는 창은?",opts:["Package Manager","Console","Animator","Profiler"],ans:0,e:"Window > Package Manager에서 패키지를 관리한다."},
{d:"ASSET",f:"mc",lvl:"下",q:"2D 게임에서 이미지를 스프라이트로 쓰려면 텍스처의 Texture Type을 무엇으로 설정하나?",opts:["Sprite (2D and UI)","Cubemap","Normal Map","Cursor"],ans:0,e:"Texture Type을 Sprite(2D and UI)로 설정해야 2D 스프라이트로 사용된다."},
{d:"ASSET",f:"mc",lvl:"中",q:"프리팹 안에 다른 프리팹을 포함하는 구조를 뜻하는 것은?",opts:["Nested Prefab(중첩 프리팹)","Prefab Override","Scene","Material"],ans:0,e:"Nested Prefab은 프리팹 내부에 또 다른 프리팹 인스턴스를 넣어 재사용성을 높인다."},
{d:"UI",f:"mc",lvl:"中",q:"UI 요소가 회전·스케일될 때 기준이 되는 중심점은?",opts:["Anchor","Pivot","Canvas","Layer"],ans:1,e:"Pivot이 Rect Transform의 회전·스케일 기준점이다(앵커는 부모 기준 배치)."},
{d:"UI",f:"mc",lvl:"上",q:"버튼 배경 이미지를 늘려도 모서리가 뭉개지지 않게 하는 Image Type은?",opts:["Simple","Sliced(9-slice)","Filled","Tiled"],ans:1,e:"Sliced(9-slice)는 모서리를 고정하고 가운데만 늘려 테두리 왜곡을 막는다."},
{d:"UI",f:"mc",lvl:"下",q:"켜고 끄는 상태(체크박스)를 입력받는 UI 요소는?",opts:["Slider","Toggle","Image","Text"],ans:1,e:"Toggle은 on/off 상태를 나타내는 체크박스형 UI다."},
{d:"UI",f:"mc",lvl:"中",q:"자식 UI들을 가로·세로로 자동 정렬·간격 배치해 주는 컴포넌트는?",opts:["Layout Group(Horizontal/Vertical)","Rigidbody","Canvas Scaler","Animator"],ans:0,e:"Horizontal/Vertical Layout Group이 자식 요소를 자동으로 정렬·배치한다."},
{d:"LIGHT",f:"mc",lvl:"中",q:"광원이 없어도 씬 전체를 은은하게 밝히는 기본 조명은?",opts:["Ambient Light(환경광)","Spot Light","Area Light","Point Light"],ans:0,e:"Lighting 설정의 Ambient Light(환경광)가 씬 전역의 기본 밝기를 담당한다."},
{d:"LIGHT",f:"mc",lvl:"上",q:"주변 환경을 반사하는 금속·거울 표면을 사실적으로 만들려면?",opts:["Reflection Probe","NavMesh","Audio Listener","Rigidbody"],ans:0,e:"Reflection Probe가 주변을 캡처해 반사에 사용, 금속·유리 반사를 사실적으로 만든다."},
{d:"LIGHT",f:"mc",lvl:"中",q:"특정 오브젝트가 그림자를 만들지/받을지 켜고 끄는 렌더러 설정은?",opts:["Cast/Receive Shadows","Loop Time","Spatial Blend","Is Trigger"],ans:0,e:"Mesh Renderer의 Cast Shadows / Receive Shadows로 그림자 생성·수신을 제어한다."},
{d:"AUDIO",f:"mc",lvl:"下",q:"소리 '데이터 파일'과 그것을 '재생하는 컴포넌트'를 옳게 짝지은 것은?",opts:["AudioClip=데이터, AudioSource=재생기","AudioSource=데이터, AudioClip=재생기","둘 다 데이터","둘 다 재생기"],ans:0,e:"AudioClip은 소리 데이터, AudioSource는 그 클립을 재생하는 컴포넌트다."},
{d:"AUDIO",f:"mc",lvl:"中",q:"씬에서 소리를 '듣는' 지점인 Audio Listener는 보통 몇 개 두나?",opts:["여러 개 필수","하나(주로 메인 카메라)","0개","오브젝트마다 하나씩"],ans:1,e:"Audio Listener는 보통 메인 카메라에 하나만 둔다(여러 개면 경고)."},
{d:"AUDIO",f:"mc",lvl:"上",q:"용량 큰 배경음악을 메모리에 다 올리지 않고 흘려보내며 재생하는 Load Type은?",opts:["Decompress On Load","Streaming","Compressed In Memory","Preload"],ans:1,e:"Streaming은 디스크에서 스트리밍 재생해 메모리 사용을 줄인다(긴 BGM에 적합)."},
{d:"MAT",f:"mc",lvl:"中",q:"Material과 Shader의 관계로 옳은 것은?",opts:["Material은 Shader에 속성값을 채운 인스턴스","Shader가 Material의 하위 파일","둘은 무관","Material이 코드를 실행"],ans:0,e:"Shader가 렌더링 방식을 정의하고, Material은 그 Shader에 색·텍스처 등 값을 채운 인스턴스다."},
{d:"MAT",f:"mc",lvl:"中",q:"머티리얼에서 텍스처가 표면에 몇 번 반복될지 정하는 값은?",opts:["Tiling","Metallic","Emission","Albedo"],ans:0,e:"Tiling으로 텍스처 반복 횟수를, Offset으로 시작 위치를 조절한다."},
{d:"MAT",f:"mc",lvl:"下",q:"칼을 휘두를 때 궤적처럼 이동 경로를 따라 잔상을 그리는 컴포넌트는?",opts:["Trail Renderer","Mesh Filter","Rigidbody","Canvas"],ans:0,e:"Trail Renderer가 오브젝트 이동 경로를 따라 궤적을 그린다."},
{d:"SVC",f:"mc",lvl:"上",q:"앱을 다시 배포하지 않고 서버에서 게임 밸런스 값을 바꾸는 서비스는?",opts:["Remote Config","Cloud Build","Ads","Analytics"],ans:0,e:"Remote Config로 원격에서 파라미터를 바꿔 재배포 없이 밸런스를 조정한다."},
{d:"SVC",f:"mc",lvl:"中",q:"배포된 게임의 오류·크래시를 수집해 보고하는 Unity 서비스는?",opts:["Cloud Diagnostics","In-App Purchasing","NavMesh","Lightmap"],ans:0,e:"Cloud Diagnostics로 사용자 기기의 크래시·예외를 수집·분석한다."},
{d:"GDES",f:"mc",lvl:"中",q:"게임이 진행될수록 도전이 점진적으로 어려워지도록 설계한 것은?",opts:["난이도 곡선(Difficulty Curve)","로딩 화면","세이브 슬롯","엔드 크레딧"],ans:0,e:"난이도 곡선은 학습·긴장·성취가 유지되도록 도전 강도를 점진적으로 조절한 설계다."},
{d:"GDES",f:"mc",lvl:"中",q:"팀 기반으로 진영을 파괴하는 탑다운 대전 장르(예: LoL)는?",opts:["MOBA","FPS","비주얼 노벨","러너"],ans:0,e:"MOBA는 팀이 유닛·타워를 두고 상대 본진을 파괴하는 실시간 대전 장르다."},
{d:"PMGT",f:"mc",lvl:"中",q:"2D에서 스프라이트가 겹칠 때 앞뒤로 그려지는 순서를 그룹으로 정하는 것은?",opts:["Sorting Layer","Physics Layer","Tag","Prefab"],ans:0,e:"Sorting Layer(및 Order in Layer)로 2D 렌더 순서를 제어한다."},
{d:"PMGT",f:"mc",lvl:"中",q:"만든 씬을 빌드에 포함시키고 로드 순서를 등록하는 곳은?",opts:["Build Settings의 Scenes In Build","Inspector","Console","Package Manager"],ans:0,e:"File > Build Settings의 Scenes In Build에 씬을 등록해야 빌드에 포함·로드된다."},
{d:"GART",f:"mc",lvl:"中",q:"실제 폴리곤을 늘리지 않고 표면의 요철·디테일을 표현하는 텍스처는?",opts:["Normal Map","Albedo Map","Light Map","Height Field"],ans:0,e:"Normal Map은 표면 법선을 흉내 내 적은 폴리곤으로도 굴곡 디테일을 표현한다."},
{d:"GART",f:"mc",lvl:"上",q:"멀리 있는 모델을 자동으로 저폴리곤 버전으로 바꿔 성능을 아끼는 기법은?",opts:["LOD(Level of Detail)","Atlas","Baking","Culling Mask"],ans:0,e:"LOD Group으로 거리별로 디테일이 다른 모델을 전환해 렌더 부하를 줄인다."},
{d:"NAV",f:"mc",lvl:"上",q:"런타임에 움직이는 상자처럼 NavMesh 위 동적 장애물을 실시간 회피하게 하는 컴포넌트는?",opts:["NavMesh Obstacle","Off-Mesh Link","Light Probe","Rigidbody"],ans:0,e:"NavMesh Obstacle은 carve로 실시간에 이동 영역을 파내 동적 장애물 회피를 만든다."},
{d:"NAV",f:"mc",lvl:"中",q:"NavMesh Agent에게 목표 지점으로 이동하라고 지시하는 코드는?",opts:["agent.SetDestination(목표)","agent.Move()","agent.GoTo()","agent.Target()"],ans:0,e:"agent.SetDestination(목표위치)로 경로를 계산해 이동시킨다."},
{d:"EMP",f:"mc",lvl:"下",q:"게임 취업 시 자신의 실력을 증명하는 가장 대표적인 자료는?",opts:["포트폴리오(작업물 모음)","주민등록증","성적표만","이력서 사진"],ans:0,e:"포트폴리오(완성·참여 작업물)로 실무 역량을 직접 보여주는 것이 핵심이다."},
{d:"IND",f:"mc",lvl:"中",q:"게임을 만드는 '개발사'와 자금·마케팅·배급을 맡는 주체를 옳게 짝지은 것은?",opts:["개발=Developer, 배급=Publisher","둘 다 Publisher","둘 다 Developer","개발=Publisher, 배급=Developer"],ans:0,e:"Developer가 개발을, Publisher가 자금·마케팅·유통을 담당한다(겸하는 경우도 있음)."},
/* ===== v5.2 보강: Employment (6) ===== */
{d:"EMP",f:"mc",q:"포트폴리오에 포함할 내용으로 가장 적절한 것은?",opts:["즐겨 한 게임 목록","직접 제작·기여한 프로젝트와 본인의 역할 설명","좋아하는 게임 리뷰 모음","수강 과목 성적표"],ans:1,e:"포트폴리오는 본인이 만든 결과물과 기여한 역할을 구체적으로 보여주는 자료다."},
{d:"EMP",f:"mc",q:"게임 업계 이력서 작성 요령으로 옳은 것은?",opts:["모든 경험을 최대한 길게 나열","지원 직무와 관련된 기술·프로젝트를 간결하게 강조","개인 신상 정보 위주로 작성","좋아하는 장르 취향을 상세히 서술"],ans:1,e:"이력서는 지원 직무와의 관련성을 중심으로 간결하게 쓰는 것이 핵심이다."},
{d:"EMP",f:"mc",q:"면접에서 팀 프로젝트 경험을 설명할 때 바람직한 태도는?",opts:["모든 성과를 자신의 공으로 돌린다","자신의 역할과 팀에 기여한 부분을 구체적으로 설명한다","팀원의 실수를 부각한다","결과만 말하고 과정은 생략한다"],ans:1,e:"본인의 역할·기여·배운 점을 구체적으로 말하는 것이 신뢰를 준다."},
{d:"EMP",f:"mc",q:"게임 잼(Game Jam) 참가가 취업 준비에 도움이 되는 이유는?",opts:["상금이 크기 때문","짧은 기간에 완성 경험·협업 능력·포트폴리오 결과물을 얻을 수 있어서","참가만 해도 자격증이 나와서","참가자는 의무 채용되기 때문"],ans:1,e:"게임 잼은 제한 시간 안에 완성하는 경험과 협업·포트폴리오 소재를 제공한다."},
{d:"EMP",f:"match",q:"게임 개발 직군과 주요 업무를 짝지으시오.",left:["게임 프로그래머","게임 디자이너(기획)","테크니컬 아티스트","사운드 디자이너"],right:["게임플레이·시스템 코드 구현","규칙·레벨·밸런스 설계","아트와 프로그래밍의 연결(셰이더·툴)","효과음·배경음 제작"],e:"직군별 핵심 역할 구분."},
{d:"EMP",f:"mc",q:"개발 과정을 공개하는 블로그·SNS 운영(개인 브랜딩)의 장점은?",opts:["연봉이 자동으로 오른다","학습 과정과 결과물이 알려져 네트워킹·채용 노출 기회가 늘어난다","회사 기밀을 공유할 수 있다","포트폴리오가 필요 없어진다"],ans:1,e:"꾸준한 공개 기록은 실력 증명과 업계 네트워킹에 도움이 된다."},

/* ===== v5.2 보강: Industry (6) ===== */
{d:"IND",f:"mc",q:"인디(Indie) 게임 개발의 일반적 특징은?",opts:["대규모 자본과 수백 명의 인력","소규모 팀이 창의적 아이디어를 자율적으로 개발","반드시 대형 퍼블리셔가 필요","콘솔 플랫폼 전용"],ans:1,e:"인디는 소규모·자율성·창의성이 특징이다."},
{d:"IND",f:"mc",q:"F2P(Free-to-Play) 게임의 주요 수익 방식은?",opts:["패키지 판매 수익만","인앱결제·광고 등 게임 내 수익화","월 구독료만","수익 모델이 없다"],ans:1,e:"F2P는 무료 배포 후 인앱결제·광고로 수익을 낸다."},
{d:"IND",f:"mc",q:"라이브 서비스(Live Service) 게임의 특징은?",opts:["출시 후 업데이트가 없다","출시 후에도 지속적으로 콘텐츠 업데이트와 이벤트를 운영한다","오프라인 전용이다","데모 버전만 제공한다"],ans:1,e:"라이브 서비스는 출시 이후의 지속 운영이 핵심이다."},
{d:"IND",f:"mc",q:"크런치(Crunch)가 뜻하는 것은?",opts:["출시를 앞두고 장시간 집중 근무가 이어지는 관행","게임 장르의 하나","텍스처 압축 포맷","버그의 종류"],ans:0,e:"크런치는 마감 전 과도한 초과 근무 관행을 가리키는 업계 용어다."},
{d:"IND",f:"mc",q:"모바일 게임의 일반적 특징은?",opts:["긴 플레이 세션과 복잡한 조작","짧은 세션·터치 조작·폭넓은 이용자층","항상 고사양 PC가 필요","네트워크 없이는 실행 불가"],ans:1,e:"모바일은 짧은 세션과 터치 입력, 대중적 접근성이 특징이다."},
{d:"IND",f:"match",q:"게임 배포 플랫폼과 특징을 짝지으시오.",left:["Steam","Google Play / App Store","콘솔 스토어(PS Store 등)","itch.io"],right:["PC 게임 대표 유통 플랫폼","모바일 앱 마켓","콘솔 기기 전용 마켓","인디 게임 자유 배포 플랫폼"],e:"플랫폼별 유통 채널 구분."},

/* ===== v5.2 보강: Game Art (4) ===== */
{d:"GART",f:"mc",q:"PBR(물리 기반 렌더링) 머티리얼의 특징은?",opts:["빛의 물리 법칙에 기반해 실제와 유사한 재질을 표현한다","폴리곤 수를 줄이는 기법이다","애니메이션을 압축한다","사운드를 처리한다"],ans:0,e:"PBR은 금속성·거칠기 등 물리 속성으로 사실적인 재질을 표현한다."},
{d:"GART",f:"mc",q:"UV 매핑이란 무엇인가?",opts:["3D 모델 표면에 2D 텍스처를 입히기 위한 좌표 전개","정점 수를 늘리는 작업","조명을 미리 계산하는 작업","물리 충돌 영역 설정"],ans:0,e:"UV는 3D 표면을 2D 텍스처 좌표로 펼친 것이다."},
{d:"GART",f:"mc",q:"리깅(Rigging)이란 무엇인가?",opts:["모델에 뼈대(본)를 심어 움직일 수 있게 만드는 작업","텍스처를 압축하는 작업","코드를 정리하는 작업","레벨에 오브젝트를 배치하는 작업"],ans:0,e:"리깅은 캐릭터 애니메이션을 위한 뼈대·관절 세팅이다."},
{d:"GART",f:"mc",q:"아트 스타일(사실적 vs 스타일라이즈드)을 정할 때 우선 고려할 것은?",opts:["최신 유행","게임의 콘셉트·타깃·성능 요구에 맞는 일관된 방향","아티스트 개인 취향만","무조건 사실적인 쪽"],ans:1,e:"아트 스타일은 게임 정체성과 타깃·성능 제약에 맞춰 일관되게 결정한다."},

/* ===== v5.2 보강: Navigation (4) ===== */
{d:"NAV",f:"mc",q:"NavMesh Obstacle의 Carve 옵션이 하는 일은?",opts:["장애물 주변의 NavMesh를 실시간으로 도려내 경로에서 제외한다","에이전트를 점프시킨다","이동 속도를 올린다","베이크된 NavMesh를 삭제한다"],ans:0,e:"Carve를 켜면 장애물 자리가 NavMesh에서 파여 경로 계산에서 제외된다."},
{d:"NAV",f:"mc",q:"NavMesh Agent의 Stopping Distance 설정 의미는?",opts:["목표 지점에서 얼마나 떨어진 곳에서 멈출지","최대 이동 속도","회전 속도","에이전트의 키"],ans:0,e:"Stopping Distance는 목표 앞 정지 거리다(근접 공격 캐릭터 등에 활용)."},
{d:"NAV",f:"mc",q:"베이크 시 Agent Radius 값을 크게 하면 생기는 일은?",opts:["좁은 통로가 통과 불가로 판정되어 걸을 수 있는 영역이 줄어든다","이동 속도가 빨라진다","점프력이 증가한다","아무 변화 없다"],ans:0,e:"반경이 큰 에이전트 기준으로 굽기 때문에 좁은 길이 NavMesh에서 빠진다."},
{d:"NAV",f:"match",q:"NavMesh Agent 속성과 의미를 짝지으시오.",left:["Speed","Angular Speed","Acceleration","Stopping Distance"],right:["최대 이동 속도","회전 속도","가속도","목표 앞 정지 거리"],e:"에이전트 이동 관련 핵심 속성."},

/* ===== v5.2 보강: Game Design (3) ===== */
{d:"GDES",f:"mc",q:"프로토타입(Prototype)의 목적은?",opts:["최종 그래픽을 완성하는 것","핵심 재미와 메커니즘을 빠르게 검증하는 것","마케팅 영상을 만드는 것","서버 부하를 테스트하는 것"],ans:1,e:"프로토타입은 재미의 핵심 가설을 싸고 빠르게 검증하는 도구다."},
{d:"GDES",f:"mc",q:"밸런싱(Balancing)이란?",opts:["난이도·보상·능력치를 조정해 공정하고 재미있는 경험을 만드는 작업","코드 실행 속도 최적화","사운드 볼륨 조절","텍스처 해상도 조정"],ans:0,e:"밸런싱은 수치·난이도 조정으로 게임 경험의 균형을 맞추는 일이다."},
{d:"GDES",f:"mc",q:"플레이테스트(Playtest)의 주요 목적은?",opts:["코드에 버그가 없음을 증명","실제 플레이어의 반응을 관찰해 재미·난이도 문제를 발견","광고 영상 촬영","출시 일정 연기"],ans:1,e:"플레이테스트는 개발자가 못 보는 문제를 실제 플레이어에게서 발견하는 과정이다."},

/* ===== v5.2 보강: Project Mgmt (3) ===== */
{d:"PMGT",f:"mc",q:"애자일(Agile) 개발 방식의 특징은?",opts:["모든 기능을 한 번에 완성한 뒤 공개한다","짧은 주기(스프린트)로 개발과 점검을 반복한다","문서 없이 개발한다","일정 계획 없이 개발한다"],ans:1,e:"애자일은 짧은 반복 주기로 만들고 확인하며 방향을 조정한다."},
{d:"PMGT",f:"mc",q:"버전 관리 시스템(Git 등)을 사용하는 주된 이유는?",opts:["게임 프레임률 향상","변경 이력 추적·팀 협업·이전 상태 복구가 가능해서","텍스처 용량 압축","자동 번역 지원"],ans:1,e:"버전 관리는 협업 충돌 방지와 이력·복구의 안전망이다."},
{d:"PMGT",f:"mc",q:"마일스톤(Milestone)이란?",opts:["프로젝트의 주요 중간 목표 지점","버그 목록 문서","텍스처의 한 종류","조명 설정 값"],ans:0,e:"마일스톤은 일정 관리의 기준이 되는 중간 목표(예: 알파 완성)다."},

/* ===== v5.2 보강: Services (2) ===== */
{d:"SVC",f:"mc",q:"라이브 게임 운영에서 A/B 테스트의 목적은?",opts:["두 가지 설정을 나눠 적용해 어느 쪽이 효과적인지 데이터로 비교","버그를 자동 제거","그래픽 품질 향상","앱 용량 절감"],ans:0,e:"A/B 테스트는 데이터 기반으로 더 나은 안을 고르는 실험 기법이다."},
{d:"SVC",f:"mc",q:"운영 지표 DAU가 뜻하는 것은?",opts:["하루 동안 게임을 이용한 순 이용자 수","일일 광고 수익","누적 다운로드 수","평균 플레이 시간"],ans:0,e:"DAU(Daily Active Users)는 일일 활성 이용자 수다."},

/* ================== v5.6 확충 (+93 → 300문항) ================== */
/* ----- Editor Interface (+12) ----- */
{d:"EDITOR",f:"hotspot",q:"게임 오브젝트를 3D 공간에서 직접 배치·이동하며 편집하는 창은?",tmpl:"editor",ans:"scene",e:"Scene 뷰는 씬을 시각적으로 편집하는 작업 공간이다."},
{d:"EDITOR",f:"hotspot",q:"실행 제어 버튼과 도구들이 모여 있는 에디터 상단 영역은?",tmpl:"editor",ans:"toolbar",e:"Toolbar에는 Play/Pause와 각종 도구·토글이 모여 있다."},
{d:"EDITOR",f:"hotspot",q:"선택한 오브젝트에 새 컴포넌트를 붙일 때 누르는 버튼은?",tmpl:"inspector",ans:"addcomponent",e:"Inspector 하단 Add Component 버튼으로 컴포넌트를 추가한다."},
{d:"EDITOR",f:"mc",q:"Hierarchy 상단 검색창에 이름을 입력하면?",opts:["씬에서 이름이 일치하는 오브젝트만 필터링되어 표시된다","해당 오브젝트가 삭제된다","새 씬이 열린다","에셋이 임포트된다"],ans:0,e:"검색창은 씬 내 오브젝트를 이름으로 빠르게 찾는 필터다."},
{d:"EDITOR",f:"mc",q:"Ctrl+S(Save)를 눌렀을 때 저장되는 것은?",opts:["현재 씬의 변경 사항","콘솔 로그","게임 빌드 파일","창 레이아웃만"],ans:0,e:"Ctrl+S는 현재 씬을 저장한다. 배치·설정 변경 후 저장 습관이 중요하다."},
{d:"EDITOR",f:"mc",q:"Play Mode(실행 중) 상태에서 씬의 값을 수정하면?",opts:["Play를 끄면 수정 내용이 사라진다(임시 적용)","자동으로 영구 저장된다","에디터가 종료된다","프리팹이 삭제된다"],ans:0,e:"Play Mode에서의 변경은 임시이며 종료 시 원상 복구된다 — 초보자가 가장 자주 겪는 함정."},
{d:"EDITOR",f:"mc",q:"Console 창의 'Clear on Play' 옵션은?",opts:["Play 시작 시 이전 로그를 자동으로 지운다","로그를 파일로 저장한다","에러를 무시한다","빌드 캐시를 정리한다"],ans:0,e:"실행할 때마다 로그를 비워 새 실행의 로그만 보게 해 준다."},
{d:"EDITOR",f:"mc",q:"씬에 있는 오브젝트를 Project 창으로 드래그하면?",opts:["그 오브젝트의 프리팹이 생성된다","오브젝트가 삭제된다","씬이 복사된다","머티리얼이 생성된다"],ans:0,e:"씬 오브젝트를 Project로 드래그하는 것이 프리팹을 만드는 기본 방법이다."},
{d:"EDITOR",f:"mc",q:"오브젝트나 에셋의 이름을 바꾸는 일반적인 방법은?",opts:["선택 후 F2 또는 이름 부분 더블클릭","Ctrl+D","Play 버튼","Shift+Delete"],ans:0,e:"F2(또는 이름 더블클릭)로 이름 변경 모드에 들어간다."},
{d:"EDITOR",f:"mc",q:"Scene 뷰 우상단의 축 기즈모(X·Y·Z 콘)를 클릭하면?",opts:["해당 축 방향에서 바라보는 시점으로 전환된다","오브젝트가 회전한다","조명이 꺼진다","씬이 저장된다"],ans:0,e:"씬 기즈모 클릭으로 정면·측면·상단 등 표준 시점으로 빠르게 전환한다."},
{d:"EDITOR",f:"mc",q:"Inspector 우상단 자물쇠(Lock) 아이콘의 기능은?",opts:["다른 오브젝트를 선택해도 현재 Inspector 내용을 고정 표시","오브젝트 편집 금지","씬 잠금","프로젝트 저장 잠금"],ans:0,e:"Lock을 켜면 선택이 바뀌어도 그 Inspector가 유지되어 드래그 연결에 유용하다."},
{d:"EDITOR",f:"order",q:"새 씬을 만들어 게임 무대를 준비하는 순서를 배열하시오.",items:["File > New Scene으로 새 씬 생성","바닥·조명 등 기본 오브젝트 배치","File > Save Scene으로 저장","Build Settings의 씬 목록에 추가"],e:"생성→구성→저장→빌드 등록 순."},

/* ----- Programming (+11) ----- */
{d:"PROG",f:"mc",q:"LateUpdate()가 주로 쓰이는 처리로 옳은 것은?",opts:["모든 Update가 끝난 뒤 실행할 처리(예: 카메라 추적)","물리 연산","앱 시작 초기화","충돌 콜백"],ans:0,e:"LateUpdate는 매 프레임 Update 이후 호출 — 대상 이동이 끝난 뒤 따라가는 카메라에 적합."},
{d:"PROG",f:"mc",q:"transform.position 직접 변경과 Rigidbody.AddForce의 차이는?",opts:["전자는 물리를 무시한 직접 이동, 후자는 물리엔진 기반 이동","둘은 완전히 동일","전자가 항상 자연스럽다","후자는 2D 전용"],ans:0,e:"물리 반응(충돌·관성)이 필요하면 Rigidbody 계열 이동을 쓴다."},
{d:"PROG",f:"mc",q:"Input.GetKeyDown의 반환 특징은?",opts:["키를 누른 '그 프레임'에만 true","누르는 동안 계속 true","키를 뗄 때 true","항상 true"],ans:0,e:"GetKeyDown=눌린 순간 1회, GetKey=누르는 동안, GetKeyUp=뗀 순간."},
{d:"PROG",f:"mc",q:"게임 스크립트가 MonoBehaviour를 상속하는 이유는?",opts:["컴포넌트로 부착되고 Start·Update 같은 생명주기 콜백을 받기 위해","컴파일이 빨라져서","그래픽이 좋아져서","용량이 줄어서"],ans:0,e:"MonoBehaviour 상속으로 GameObject에 부착 가능해지고 유니티 이벤트를 받는다."},
{d:"PROG",f:"mc",q:"Time.timeScale = 0 으로 설정하면?",opts:["시간 진행이 멈춰 일시정지 구현에 쓰인다","게임이 종료된다","프레임률이 올라간다","자동 저장된다"],ans:0,e:"timeScale 0은 시간 정지 — 일시정지 메뉴의 기본 기법이다."},
{d:"PROG",f:"mc",q:"Mathf.Lerp(a, b, t)의 용도는?",opts:["a에서 b 사이를 t 비율만큼 보간한 값을 얻는다","무작위 값을 얻는다","반올림한다","절댓값을 얻는다"],ans:0,e:"Lerp(선형 보간)는 부드러운 값 변화(페이드·이동)에 널리 쓰인다."},
{d:"PROG",f:"mc",q:"int 버전 Random.Range(1, 5)가 반환할 수 있는 값은?",opts:["1~4","1~5","0~5","2~5"],ans:0,e:"정수 Range는 최댓값을 포함하지 않는다(1,2,3,4)."},
{d:"PROG",f:"mc",q:"오브젝트를 통째로 비활성화(보이지 않고 동작 정지)하는 코드는?",opts:["gameObject.SetActive(false)","Destroy(gameObject)","this.enabled = true","Instantiate(gameObject)"],ans:0,e:"SetActive(false)는 파괴하지 않고 꺼 두는 것 — 재사용(오브젝트 풀링)에도 쓰인다."},
{d:"PROG",f:"match",q:"C# 자료형과 용도를 짝지으시오.",left:["int","float","bool","string"],right:["정수(점수·개수)","소수가 있는 실수(속도·시간)","참/거짓(스위치 상태)","문자열(이름·대사)"],e:"기본 자료형의 대표 용도."},
{d:"PROG",f:"order",q:"총알 발사 기능을 구현하는 순서를 배열하시오.",items:["총알 프리팹 준비","발사 위치(총구) Transform 참조 확보","입력 감지 시 Instantiate로 총알 생성","생성된 총알에 힘/속도 부여"],e:"프리팹→참조→생성→발사 순."},
{d:"PROG",f:"mc",q:"다른 오브젝트의 스크립트에 있는 기능을 호출하려면?",opts:["그 오브젝트의 컴포넌트를 GetComponent로 얻어 public 메서드를 호출","이름만 알면 자동으로 호출된다","불가능하다","씬을 저장해야 한다"],ans:0,e:"참조를 얻은 뒤 public 멤버에 접근하는 것이 기본 상호작용 방식이다."},

/* ----- Physics (+8) ----- */
{d:"PHYS",f:"hotspot",q:"충돌 시 반응 정도에 영향을 주는 '질량' 값을 조절하는 곳은?",tmpl:"inspector",ans:"rb-mass",e:"Rigidbody의 Mass가 클수록 충돌에 덜 밀린다."},
{d:"PHYS",f:"hotspot",q:"이동 중 공기 저항처럼 서서히 감속시키는 값을 조절하는 곳은?",tmpl:"inspector",ans:"rb-drag",e:"Rigidbody의 Drag가 클수록 빨리 감속한다."},
{d:"PHYS",f:"mc",q:"물리 코드를 FixedUpdate에 넣는 이유는?",opts:["고정 시간 간격으로 호출되어 물리 시뮬레이션이 일정해지기 때문","가장 빨리 호출돼서","한 번만 호출돼서","렌더링 직후라서"],ans:0,e:"물리는 프레임률과 무관한 고정 스텝에서 계산해야 안정적이다."},
{d:"PHYS",f:"mc",q:"Rigidbody 없이 Collider만 가진 움직이지 않는 벽·바닥을 부르는 말은?",opts:["Static Collider(정적 콜라이더)","Dynamic Rigidbody","Trigger Volume","Kinematic Agent"],ans:0,e:"정적 콜라이더는 움직이지 않는 지형·구조물에 쓰며 연산이 가볍다."},
{d:"PHYS",f:"mc",q:"OnCollisionEnter(Collision col)의 col에서 얻을 수 있는 정보는?",opts:["충돌 상대 오브젝트·접촉 지점 등 충돌 정보","오디오 볼륨","화면 해상도","씬 이름"],ans:0,e:"Collision에는 상대(gameObject)·접점(contacts)·상대 속도 등이 담긴다."},
{d:"PHYS",f:"mc",q:"2D 게임 물리에 사용하는 컴포넌트 조합은?",opts:["Rigidbody2D + Collider2D(Box/Circle 등)","Rigidbody + BoxCollider","NavMesh Agent","Canvas + Image"],ans:0,e:"2D는 전용 물리 컴포넌트(…2D)를 사용해야 한다."},
{d:"PHYS",f:"mc",q:"AddForce에 ForceMode.Impulse를 쓰는 경우의 특징은?",opts:["질량을 고려한 순간 충격을 한 번에 가한다(점프·폭발)","지속적으로 약한 힘을 준다","중력을 제거한다","속도를 고정한다"],ans:0,e:"Impulse는 순간 충격, Force는 지속적인 힘이다."},
{d:"PHYS",f:"order",q:"물리 기반 점프를 구현하는 순서를 배열하시오.",items:["바닥에 닿아 있는지(접지) 확인","점프 입력 감지","Rigidbody에 위쪽 Impulse 힘 적용","공중에 있는 동안 재점프 차단"],e:"접지 확인→입력→힘 적용→중복 방지."},

/* ----- Animation (+7) ----- */
{d:"ANIM",f:"mc",q:"Animator 창과 Animation 창의 차이로 옳은 것은?",opts:["Animator는 상태·전환 관리, Animation은 클립의 키프레임 편집","완전히 같은 창","Animation은 3D 전용","Animator는 소리 편집용"],ans:0,e:"상태 기계는 Animator 창, 클립 키프레임 작업은 Animation 창."},
{d:"ANIM",f:"mc",q:"Trigger 파라미터의 특징은?",opts:["한 번 발동 후 자동으로 해제되는 일회성 신호","항상 true로 유지된다","숫자를 저장한다","문자열을 저장한다"],ans:0,e:"Trigger는 점프·피격처럼 순간 발동 전환에 쓰인다."},
{d:"ANIM",f:"mc",q:"Condition 없이 Has Exit Time만 켜진 Transition은?",opts:["클립 재생이 끝나면 자동으로 다음 상태로 전이","전이가 일어나지 않음","즉시 전이","오류 발생"],ans:0,e:"Exit Time 기반 전이는 인트로→루프 같은 자동 연결에 쓰인다."},
{d:"ANIM",f:"mc",q:"키프레임(Keyframe) 애니메이션의 원리는?",opts:["특정 시점의 값을 기록하면 그 사이를 자동 보간한다","모든 프레임을 수동 지정한다","물리로만 계산한다","텍스처를 교체한다"],ans:0,e:"키프레임 사이는 커브로 보간되어 부드러운 변화가 만들어진다."},
{d:"ANIM",f:"mc",q:"모델 릭을 Humanoid로 설정할 때의 장점은?",opts:["사람형 캐릭터 간 애니메이션 재사용(리타게팅) 가능","파일 용량 감소","물리 자동화","텍스처 공유"],ans:0,e:"Humanoid는 공통 뼈 구조로 매핑되어 클립을 다른 캐릭터에 재사용할 수 있다."},
{d:"ANIM",f:"match",q:"Animator 파라미터 타입과 대표 용도를 짝지으시오.",left:["Bool","Float","Int","Trigger"],right:["달리는 중 여부 같은 켜짐/꺼짐","이동 속도 같은 연속 값","콤보 단계 같은 정수","점프 시작 같은 일회성 발동"],e:"파라미터 타입별 용도 구분."},
{d:"ANIM",f:"mc",q:"상태 전환이 뚝 끊겨 보일 때 부드럽게 만들려면 조절할 것은?",opts:["Transition Duration(전환 블렌드 시간)","텍스처 크기","레이어 이름","카메라 FOV"],ans:0,e:"전환 시간 동안 두 클립이 블렌드되어 자연스러워진다."},

/* ----- Asset Management (+7) ----- */
{d:"ASSET",f:"mc",q:"버전 관리에 반드시 포함해야 하는 프로젝트 핵심 폴더는?",opts:["Assets와 ProjectSettings","Library","Temp","Builds"],ans:0,e:"Assets·ProjectSettings(및 Packages)가 원본. Library/Temp는 자동 재생성된다."},
{d:"ASSET",f:"mc",q:"Unity Asset Store의 용도는?",opts:["모델·스크립트 등 에셋을 받아 프로젝트에 임포트","게임 판매 전용","버그 신고","빌드 배포"],ans:0,e:"에셋 스토어에서 유·무료 에셋을 받아 개발에 활용한다."},
{d:"ASSET",f:"mc",q:"임포트한 3D 모델의 크기가 너무 크거나 작을 때 조정하는 임포트 설정은?",opts:["Scale Factor","Loop Time","Anchor","Tag"],ans:0,e:"모델 임포트 설정의 Scale Factor로 단위 차이를 보정한다."},
{d:"ASSET",f:"mc",q:"한 장에 여러 프레임이 담긴 스프라이트 시트를 개별 스프라이트로 나누는 방법은?",opts:["Sprite Mode를 Multiple로 두고 Sprite Editor에서 슬라이스","Console에서 분할","NavMesh Bake","Audio Mixer"],ans:0,e:"Sprite Editor의 Slice 기능으로 시트를 개별 스프라이트로 자른다."},
{d:"ASSET",f:"mc",q:"프리팹 인스턴스의 변경을 원본에 반영하지 않고 그 인스턴스에만 남기려면?",opts:["Overrides를 Apply하지 않고 그대로 둔다","항상 원본에 자동 반영된다","불가능하다","씬을 삭제한다"],ans:0,e:"Override 상태로 두면 그 인스턴스만의 변경으로 유지된다."},
{d:"ASSET",f:"match",q:"프로젝트 폴더(관례)와 역할을 짝지으시오.",left:["Assets","Scenes","Prefabs","Scripts"],right:["모든 에셋의 최상위 폴더","씬 파일 보관","프리팹 보관","C# 코드 보관"],e:"정리된 폴더 구조는 협업의 기본이다."},
{d:"ASSET",f:"mc",q:"여러 씬에서 같은 오브젝트 구성을 재사용하는 가장 좋은 방법은?",opts:["프리팹으로 만들어 각 씬에 배치","매번 복사-붙여넣기","씬을 병합","코드로 매번 새로 조립"],ans:0,e:"프리팹은 재사용·일괄 수정이 가능한 표준 방법이다."},

/* ----- User Interface (+7) ----- */
{d:"UI",f:"mc",q:"World Space Canvas의 대표적인 사용처는?",opts:["캐릭터 머리 위 이름표처럼 3D 공간 속에 존재하는 UI","화면 고정 HUD","로딩 화면 전용","빌드 설정"],ans:0,e:"World Space는 UI가 씬의 3D 오브젝트처럼 배치된다."},
{d:"UI",f:"mc",q:"버튼 클릭 등 UI 입력이 동작하려면 씬에 함께 있어야 하는 것은?",opts:["EventSystem","NavMesh","Rigidbody","Audio Listener"],ans:0,e:"EventSystem이 입력 이벤트를 UI에 전달한다(캔버스 생성 시 자동 추가)."},
{d:"UI",f:"mc",q:"체력바를 구현할 때 흔히 쓰는 Image 설정은?",opts:["Image Type을 Filled로 두고 fillAmount를 조절","Sliced로 고정","Simple만 사용","Tiled로 반복"],ans:0,e:"Filled 타입의 fillAmount(0~1)로 게이지를 표현한다."},
{d:"UI",f:"mc",q:"앵커를 화면 오른쪽 위에 설정하면?",opts:["해상도가 바뀌어도 요소가 오른쪽 위를 기준으로 위치를 유지","항상 중앙에 위치","크기가 자동 2배","요소가 숨겨짐"],ans:0,e:"앵커 기준 상대 배치로 다양한 해상도에 대응한다."},
{d:"UI",f:"mc",q:"Button의 Interactable을 끄면?",opts:["클릭할 수 없는 비활성 상태(흐린 표시)가 된다","버튼이 삭제된다","투명해진다","씬이 이동한다"],ans:0,e:"조건이 안 될 때 버튼을 잠그는 표준 방법이다."},
{d:"UI",f:"mc",q:"점수 텍스트를 코드로 갱신하는 일반적인 방법은?",opts:["TMP_Text(또는 Text) 참조를 얻어 .text 값을 변경","텍스처를 교체","씬을 다시 로드","머티리얼 수정"],ans:0,e:"텍스트 컴포넌트 참조 후 text 속성을 바꾼다."},
{d:"UI",f:"match",q:"UI 이벤트와 발생 시점을 짝지으시오.",left:["Button OnClick","Slider OnValueChanged","Toggle OnValueChanged","InputField OnEndEdit"],right:["버튼을 클릭했을 때","슬라이더 값이 바뀔 때","체크 상태가 바뀔 때","입력을 마쳤을 때"],e:"UI 컴포넌트별 대표 이벤트."},

/* ----- Lighting (+6) ----- */
{d:"LIGHT",f:"mc",q:"Point Light의 특징은?",opts:["한 점에서 모든 방향으로 퍼지는 빛(전구·촛불)","평행하게 내리쬐는 빛","원뿔형으로 퍼지는 빛","화면 전체를 비추는 UI"],ans:0,e:"포인트 라이트는 전구처럼 전방위로 퍼진다."},
{d:"LIGHT",f:"mc",q:"Spot Light의 대표 사용처는?",opts:["손전등·무대 조명처럼 원뿔형으로 비추는 빛","태양광","환경광","반사 프로브"],ans:0,e:"스팟은 각도·범위를 가진 원뿔형 광원이다."},
{d:"LIGHT",f:"mc",q:"라이트의 Range 속성이 뜻하는 것은?",opts:["빛이 도달하는 최대 거리(Point/Spot)","빛의 색상","그림자 해상도","베이크 시간"],ans:0,e:"Range 밖에는 빛이 미치지 않는다."},
{d:"LIGHT",f:"mc",q:"Realtime 라이트와 Baked 라이트의 차이는?",opts:["Realtime은 매 프레임 계산(비용 큼), Baked는 미리 계산해 저장(비용 작음)","완전히 동일","Baked가 항상 더 비쌈","Realtime은 정적 전용"],ans:0,e:"성능이 중요한 모바일에서는 베이크 활용이 핵심이다."},
{d:"LIGHT",f:"mc",q:"씬이 전체적으로 너무 어두울 때 조절하는 환경 설정은?",opts:["Lighting 창의 Environment(주변광/스카이박스) 설정","Console 설정","Tag 설정","Physics 설정"],ans:0,e:"Ambient·스카이박스 조정으로 전체 밝기 기반을 바꾼다."},
{d:"LIGHT",f:"mc",q:"그림자가 전혀 보이지 않을 때 우선 확인할 라이트 설정은?",opts:["Shadow Type이 No Shadows로 되어 있는지","Loop Time","isTrigger","Anchor"],ans:0,e:"라이트별 Shadow Type과 품질 설정의 그림자 거리도 함께 확인한다."},

/* ----- Audio (+5) ----- */
{d:"AUDIO",f:"mc",q:"버튼 클릭음처럼 거리감이 필요 없는 소리의 Spatial Blend 값은?",opts:["0 (2D)","1 (3D)","0.5 고정","음수"],ans:0,e:"UI음은 2D(0), 공간감이 필요한 효과음은 3D(1)로 둔다."},
{d:"AUDIO",f:"mc",q:"AudioSource.Play()와 PlayOneShot()의 차이는?",opts:["PlayOneShot은 재생 중인 소리를 끊지 않고 겹쳐 재생한다","완전히 동일하다","Play는 3D 전용","PlayOneShot은 반복 전용"],ans:0,e:"연타 효과음은 PlayOneShot이 자연스럽다."},
{d:"AUDIO",f:"mc",q:"Audio Source의 Play On Awake 옵션은?",opts:["씬 시작(활성화) 시 자동으로 재생","클릭할 때 재생","반복 재생","음소거"],ans:0,e:"배경음악처럼 시작과 함께 재생할 소리에 쓴다."},
{d:"AUDIO",f:"mc",q:"게임에서 흔히 쓰는 오디오 파일 포맷 묶음은?",opts:["WAV · MP3 · OGG","PNG · JPG","FBX · OBJ","CS · JS"],ans:0,e:"짧은 효과음은 WAV, 긴 음악은 OGG/MP3가 일반적이다."},
{d:"AUDIO",f:"mc",q:"배경음악이 씬 전환 후에도 끊기지 않게 하는 일반적 기법은?",opts:["음악 오브젝트에 DontDestroyOnLoad를 적용","볼륨을 0으로","씬마다 복제","불가능"],ans:0,e:"씬 로드 시 파괴되지 않는 오브젝트로 만들어 연속 재생한다."},

/* ----- Materials & Effects (+5) ----- */
{d:"MAT",f:"mc",q:"Standard Shader의 Smoothness 값을 높이면?",opts:["표면이 매끈해져 반사·하이라이트가 선명해진다","어두워진다","투명해진다","폴리곤이 늘어난다"],ans:0,e:"Smoothness↑ = 매끈·광택, ↓ = 거칠고 무광."},
{d:"MAT",f:"mc",q:"Shader Graph란?",opts:["노드를 연결해 코드 없이 셰이더를 만드는 도구","모델링 도구","사운드 편집기","버전 관리 도구"],ans:0,e:"URP/HDRP에서 시각적으로 셰이더를 제작한다."},
{d:"MAT",f:"mc",q:"파티클이 나오는 양(초당 개수)을 조절하는 모듈은?",opts:["Emission","Renderer","Collision","Lights"],ans:0,e:"Emission의 Rate over Time으로 방출량을 정한다."},
{d:"MAT",f:"mc",q:"파티클이 시간이 지날수록 작아지게 하는 모듈은?",opts:["Size over Lifetime","Start Delay","Looping","Prewarm"],ans:0,e:"Lifetime 곡선 모듈들로 수명에 따른 변화(크기·색)를 준다."},
{d:"MAT",f:"mc",q:"여러 오브젝트가 같은 머티리얼을 공유할 때의 장점은?",opts:["배칭 등으로 성능에 유리하고 일괄 수정이 쉽다","용량이 늘어난다","항상 느려진다","충돌이 정확해진다"],ans:0,e:"머티리얼 공유는 드로우콜 절감의 기본이다."},

/* ----- Game Design (+5) ----- */
{d:"GDES",f:"mc",q:"튜토리얼의 목적은?",opts:["게임 규칙과 조작을 자연스럽게 학습시키는 것","광고 노출","저장 기능","점수 초기화"],ans:0,e:"좋은 튜토리얼은 플레이 속에서 자연스럽게 가르친다."},
{d:"GDES",f:"mc",q:"게임 디자인에서 '피드백'이란?",opts:["플레이어 행동에 대한 즉각적 반응(효과음·이펙트·점수 표시)","버그 리포트","설문지","패치 노트"],ans:0,e:"행동→반응의 즉각성이 손맛과 이해도를 만든다."},
{d:"GDES",f:"mc",q:"레벨 디자인의 목표로 가장 적절한 것은?",opts:["공간과 배치로 난이도와 재미의 흐름을 설계","코드 최적화","서버 관리","사운드 믹싱"],ans:0,e:"레벨은 학습→도전→보상의 흐름을 공간으로 구현한다."},
{d:"GDES",f:"mc",q:"게임 디자인 문서(GDD)의 역할은?",opts:["게임의 규칙·시스템·콘텐츠를 팀이 공유하도록 정리한 설계 문서","법적 계약서","버그 목록","급여 명세서"],ans:0,e:"GDD는 팀의 공통 청사진이다."},
{d:"GDES",f:"match",q:"장르와 특징을 짝지으시오.",left:["FPS","로그라이크","샌드박스","리듬 게임"],right:["1인칭 슈팅","죽으면 처음부터·무작위 구성","자유로운 창작·개방적 목표","음악 박자에 맞춘 입력"],e:"대표 장르의 핵심 특징."},

/* ----- Services (+4) ----- */
{d:"SVC",f:"mc",q:"크래시 리포트에서 가장 먼저 확인할 정보는?",opts:["발생 기기·버전과 스택 트레이스(오류 위치)","광고 수익","다운로드 수","아트 스타일"],ans:0,e:"재현 조건과 오류 위치 파악이 수정의 출발점이다."},
{d:"SVC",f:"mc",q:"리텐션(Retention) 지표의 의미는?",opts:["설치 후 일정 기간 뒤에도 계속 접속하는 이용자 비율","총 다운로드 수","서버 비용","앱 용량"],ans:0,e:"D1/D7 리텐션은 게임의 지속 매력을 보여 주는 핵심 지표다."},
{d:"SVC",f:"mc",q:"보상형(Rewarded) 광고란?",opts:["시청을 선택한 이용자에게 게임 내 보상을 주는 광고","강제 전면 광고","하단 배너","시스템 팝업"],ans:0,e:"선택형이라 이용자 거부감이 적어 모바일에서 널리 쓰인다."},
{d:"SVC",f:"mc",q:"실시간 멀티플레이에서 서버의 핵심 역할은?",opts:["플레이어 간 상태 동기화와 판정","텍스처 압축","애니메이션 보간","조명 베이크"],ans:0,e:"권위 서버가 상태를 동기화·검증해 치팅과 불일치를 막는다."},

/* ----- Project Mgmt (+4) ----- */
{d:"PMGT",f:"mc",q:"스크럼의 데일리 스탠드업(짧은 회의) 목적은?",opts:["진행 상황과 막힌 문제를 매일 짧게 공유해 협업을 정렬","급여 논의","계약 체결","코드 리뷰 전용"],ans:0,e:"어제 한 일·오늘 할 일·막힌 것 공유가 핵심이다."},
{d:"PMGT",f:"mc",q:"백로그(Backlog)란?",opts:["해야 할 작업을 우선순위로 정리한 목록","버그의 일종","빌드 파일","텍스처 목록"],ans:0,e:"백로그에서 우선순위 순으로 꺼내 스프린트를 계획한다."},
{d:"PMGT",f:"mc",q:"빌드(Build)란?",opts:["프로젝트를 실행 가능한 게임 파일로 만드는 과정","프로젝트 백업","스크립트 삭제","씬 병합"],ans:0,e:"Build Settings에서 플랫폼별 실행 파일을 만든다."},
{d:"PMGT",f:"mc",q:"타깃 플랫폼을 PC↔모바일로 바꿔 빌드하려면?",opts:["Build Settings에서 플랫폼 선택 후 Switch Platform","Console에서 변경","Animator에서 변경","Lighting에서 변경"],ans:0,e:"플랫폼 전환 시 에셋이 해당 플랫폼용으로 재임포트된다."},

/* ----- Game Art (+4) ----- */
{d:"GART",f:"mc",q:"폴리곤 수(폴리카운트)를 관리해야 하는 이유는?",opts:["렌더링 성능과 직결되기 때문","색상 표현 때문","소리 품질 때문","저작권 때문"],ans:0,e:"특히 모바일에서는 폴리곤 예산 관리가 필수다."},
{d:"GART",f:"mc",q:"텍스처 해상도를 무작정 높이면 생기는 문제는?",opts:["메모리·용량 증가로 성능이 저하된다","무조건 좋아진다","조명이 삭제된다","충돌 오류가 난다"],ans:0,e:"화면에서 보이는 크기에 맞는 적정 해상도를 쓰는 것이 원칙이다."},
{d:"GART",f:"mc",q:"무드보드(Mood Board)의 용도는?",opts:["게임의 분위기·색감 방향을 이미지 모음으로 공유","일정 관리","코드 문서화","빌드 로그"],ans:0,e:"아트 방향성을 팀이 한눈에 합의하는 도구다."},
{d:"GART",f:"mc",q:"픽셀아트의 또렷한 픽셀 느낌을 유지하는 텍스처 Filter Mode는?",opts:["Point (no filter)","Trilinear","Bilinear","Anisotropic"],ans:0,e:"보간 필터를 끄면(Point) 픽셀이 뭉개지지 않는다."},

/* ----- Navigation (+3) ----- */
{d:"NAV",f:"mc",q:"NavMesh Agent를 쓰기 전에 씬에서 먼저 해야 하는 것은?",opts:["걷기 가능한 지형을 대상으로 NavMesh 베이크","게임 빌드","조명 베이크","오디오 설정"],ans:0,e:"베이크된 NavMesh가 있어야 에이전트가 경로를 계산한다."},
{d:"NAV",f:"mc",q:"에이전트가 목적지에 도달했는지 확인하는 일반적 방법은?",opts:["remainingDistance가 stoppingDistance 이하인지 확인","색이 변하는지 확인","소리로 확인","프레임 수 세기"],ans:0,e:"남은 거리 비교가 도착 판정의 표준 방법이다."},
{d:"NAV",f:"mc",q:"특정 NavMesh Area의 비용(Cost)을 높이면 에이전트는?",opts:["그 지역을 가능하면 우회한다","더 빨리 지나간다","점프한다","그 자리에 멈춘다"],ans:0,e:"Area 비용으로 물·진흙 등 기피 지역을 표현한다."},

/* ----- Employment (+3) ----- */
{d:"EMP",f:"mc",q:"기술 면접에서 모르는 질문을 받았을 때 바람직한 대응은?",opts:["아는 범위와 문제 접근 방법을 솔직하게 설명","아는 척 지어내기","끝까지 침묵","무관한 화제로 전환"],ans:0,e:"사고 과정을 보여주는 정직한 태도가 더 좋은 평가를 받는다."},
{d:"EMP",f:"mc",q:"포트폴리오 영상 제작 시 권장 사항은?",opts:["핵심 플레이와 본인 기여 부분을 앞부분에 짧고 명확하게 배치","30분 전체 영상 그대로","설명 없이 음악만","타인 작업물 포함"],ans:0,e:"검토자는 초반 수십 초로 판단한다 — 하이라이트를 앞으로."},
{d:"EMP",f:"mc",q:"팀 프로젝트·오픈소스 협업 경험이 채용에서 평가받는 이유는?",opts:["실제 협업 능력과 결과물 품질을 보여주기 때문","운이 좋아 보여서","전혀 무관함","자격증을 대체해서"],ans:0,e:"협업 이력은 커뮤니케이션·버전관리 등 실무 역량의 증거다."},

/* ----- Industry (+2) ----- */
{d:"IND",f:"mc",q:"게임 등급 분류(심의)의 목적은?",opts:["연령에 맞는 이용 기준을 제공하기 위해","가격 결정","서버 선택","엔진 선택"],ans:0,e:"국내 GRAC, 북미 ESRB 등은 콘텐츠 수위에 따른 이용 연령을 안내한다."},
{d:"IND",f:"mc",q:"포스트모템(Postmortem)이란?",opts:["프로젝트 종료 후 잘된 점과 문제점을 회고·기록하는 것","치명적 버그의 일종","게임 장르","마케팅 용어"],ans:0,e:"다음 프로젝트를 위해 교훈을 자산화하는 업계 관행이다."},

/* ================== v5.7 확충 (+100 → 400문항) — 변형·응용형 ================== */
/* 같은 개념을 시나리오·진단·반전·예측형으로 재출제 — 암기가 아닌 이해 확인용 */

/* ----- Editor (+14) ----- */
{d:"EDITOR",f:"mc",q:"게임을 실행했는데 조작 반응이 안 보인다. 알고 보니 Scene 뷰를 보고 있었다. 실제 플레이 화면을 보려면?",opts:["Game 뷰 탭으로 전환한다","Console을 연다","씬을 저장한다","레이아웃을 초기화한다"],ans:0,e:"플레이 결과는 Game 뷰에서 확인한다. Scene 뷰는 편집용이다."},
{d:"EDITOR",f:"mc",q:"Hierarchy에서 어떤 오브젝트 이름이 회색으로 흐리게 보인다. 이유는?",opts:["비활성화(SetActive false)된 상태라서","삭제 예약이라서","프리팹이 아니라서","잠금 상태라서"],ans:0,e:"비활성 오브젝트는 Hierarchy에서 흐리게 표시된다."},
{d:"EDITOR",f:"mc",q:"Play 중에 Rigidbody 값을 조정해 최적값을 찾았는데 저장되지 않았다. 올바른 작업 방식은?",opts:["값을 기억(복사)해 두고 Play 종료 후 다시 적용한다","Play 중 Ctrl+S를 누른다","다시 실행하면 남아 있다","에디터를 재시작한다"],ans:0,e:"Play Mode 변경은 종료 시 사라지므로, 값을 메모/복사 후 편집 모드에서 반영한다."},
{d:"EDITOR",f:"mc",q:"씬 이름 옆에 별표(*)가 붙어 있다. 의미는?",opts:["저장되지 않은 변경 사항이 있다","오류가 발생했다","즐겨찾기 표시다","백업 중이다"],ans:0,e:"*는 미저장 변경 표시 — Ctrl+S로 저장하면 사라진다."},
{d:"EDITOR",f:"mc",q:"Console에 노란색 아이콘으로 표시되는 메시지의 종류는?",opts:["경고(Warning)","오류(Error)","일반 로그","성공 메시지"],ans:0,e:"흰색=로그, 노랑=경고, 빨강=오류."},
{d:"EDITOR",f:"mc",q:"스크립트에 컴파일 오류(빨간 오류)가 있는 상태에서 Play를 누르면?",opts:["오류를 고치기 전까지 Play 진입이 차단되는 경우가 일반적이다","무조건 정상 실행된다","오류가 자동 수정된다","씬이 삭제된다"],ans:0,e:"컴파일 오류가 있으면 실행할 수 없다 — Console의 오류부터 해결한다."},
{d:"EDITOR",f:"mc",q:"Inspector에서 컴포넌트 이름 왼쪽의 체크박스를 해제하면?",opts:["그 컴포넌트만 비활성화된다(오브젝트는 유지)","오브젝트가 삭제된다","컴포넌트가 삭제된다","씬이 종료된다"],ans:0,e:"컴포넌트 단위 on/off — 스크립트·라이트 등 개별 기능만 끌 수 있다."},
{d:"EDITOR",f:"mc",q:"오브젝트가 Hierarchy에는 있는데 Game 뷰에 안 보인다. 가장 먼저 확인할 것은?",opts:["카메라 시야 범위·오브젝트 위치·활성 상태","프로젝트 이름","에디터 버전","폴더 구조"],ans:0,e:"카메라 프레임 밖·비활성·너무 먼 위치가 단골 원인이다."},
{d:"EDITOR",f:"mc",q:"실수로 Inspector 창을 닫아 버렸다. 다시 여는 방법은?",opts:["상단 Window 메뉴에서 해당 창을 선택한다","유니티를 재설치한다","새 프로젝트를 만든다","다시 열 수 없다"],ans:0,e:"모든 기본 창은 Window 메뉴에서 다시 열 수 있다."},
{d:"EDITOR",f:"mc",q:"Scene 뷰에서 마우스 휠을 굴리면 일어나는 일은?",opts:["카메라 줌 인/아웃","선택 오브젝트 회전","씬 저장","실행 취소"],ans:0,e:"휠=줌, 우클릭 드래그=회전, 휠 드래그=팬이 기본 조작이다."},
{d:"EDITOR",f:"mc",q:"오브젝트가 늘어나 Hierarchy가 지저분하다. 정리하는 일반적인 방법은?",opts:["빈 GameObject를 폴더처럼 만들어 관련 오브젝트를 자식으로 묶는다","씬을 여러 개로 쪼갠다(항상)","태그를 모두 삭제한다","레이어를 삭제한다"],ans:0,e:"빈 오브젝트(예: ---Enemies---)로 그룹핑하는 것이 관례다."},
{d:"EDITOR",f:"order",q:"버그 원인을 찾는 기본 순서를 배열하시오.",items:["Console에서 오류 메시지 확인","오류가 가리키는 스크립트·줄로 이동","해당 값과 로직 점검","수정 후 다시 Play로 검증"],e:"로그 확인→위치 추적→점검→재검증의 디버깅 루프."},
{d:"EDITOR",f:"mc",q:"에디터 상단 Play 버튼이 파란색(눌린 상태)이다. 현재 상태는?",opts:["Play Mode 실행 중","저장 완료","빌드 진행 중","오류 상태"],ans:0,e:"Play 버튼 활성 표시는 실행 중이라는 뜻 — 이때의 편집은 임시다."},
{d:"EDITOR",f:"match",q:"에디터 창과 주 용도를 짝지으시오.",left:["Scene 뷰","Game 뷰","Hierarchy","Console"],right:["오브젝트 배치·편집 작업 공간","플레이어 시점 결과 확인","씬 오브젝트 목록·계층 관리","로그·경고·오류 확인"],e:"4대 핵심 창의 역할 구분."},

/* ----- Programming (+14) ----- */
{d:"PROG",f:"mc",q:"void Update() 안에 Debug.Log(\"hi\")를 넣으면 어떻게 되는가?",opts:["매 프레임 반복 출력되어 콘솔이 가득 찬다","한 번만 출력된다","출력되지 않는다","빌드가 실패한다"],ans:0,e:"Update는 매 프레임 호출 — 반복 로그는 성능·가독성 문제를 만든다."},
{d:"PROG",f:"mc",q:"NullReferenceException이 발생하는 대표적인 원인은?",opts:["비어 있는(null) 참조 변수의 멤버에 접근해서","세미콜론 누락","대문자 사용","주석 처리"],ans:0,e:"참조가 연결되지 않은 상태에서 사용하면 발생하는 최다 빈도 런타임 오류다."},
{d:"PROG",f:"mc",q:"Instantiate로 만든 총알이 계속 쌓여 게임이 느려진다. 기본적인 해결책은?",opts:["일정 시간 후 Destroy 하거나 오브젝트 풀링을 쓴다","프레임률을 제한한다","텍스처를 줄인다","씬을 나눈다"],ans:0,e:"생성한 오브젝트는 수명 관리(파괴/재사용)가 필수다."},
{d:"PROG",f:"mc",q:"if (score >= 100) 조건이 참일 때만 실행할 코드는 어디에 두는가?",opts:["if문의 중괄호 { } 안","if문 윗줄","클래스 밖","주석 안"],ans:0,e:"조건 블록 안의 코드만 조건 충족 시 실행된다."},
{d:"PROG",f:"mc",q:"public GameObject target; 을 Inspector에서 비워둔 채 실행하고 target을 사용하면?",opts:["Null 참조 오류가 날 수 있다","자동으로 채워진다","컴파일이 실패한다","씬이 저장되지 않는다"],ans:0,e:"public 참조도 연결하지 않으면 null이다 — Inspector 연결을 확인하자."},
{d:"PROG",f:"mc",q:"OnTriggerEnter(Collider other)에서 상대가 'Coin' 태그인지 확인하는 코드로 적절한 것은?",opts:["other.CompareTag(\"Coin\")","other.name == \"Tag\"","tag == Coin","Compare(\"Coin\")"],ans:0,e:"CompareTag가 표준이며 오타·성능 면에서도 안전하다."},
{d:"PROG",f:"mc",q:"for (int i = 0; i < 5; i++) 루프의 실행 횟수는?",opts:["5번","4번","6번","무한"],ans:0,e:"i=0,1,2,3,4 — 총 5회."},
{d:"PROG",f:"mc",q:"매 프레임 회전시킬 때 회전량에 Time.deltaTime을 곱하는 이유는?",opts:["프레임률이 달라도 초당 회전 속도를 일정하게 하려고","코드가 짧아져서","메모리 절약","필수 문법이라서"],ans:0,e:"이동·회전 등 연속 변화량은 deltaTime으로 프레임 독립성을 확보한다."},
{d:"PROG",f:"mc",q:"코드를 고쳤는데 게임에 반영되지 않는다. 확인할 것은?",opts:["파일 저장 여부와 Console의 컴파일 오류","모니터 해상도","마우스 감도","폴더 이름"],ans:0,e:"미저장이거나 컴파일 오류로 이전 코드가 도는 경우가 흔하다."},
{d:"PROG",f:"mc",q:"변수 이름으로 사용할 수 없는 것은?",opts:["2score (숫자로 시작)","playerHp","_speed","maxCount"],ans:0,e:"식별자는 숫자로 시작할 수 없다."},
{d:"PROG",f:"mc",q:"코드에서 // 로 시작하는 부분의 역할은?",opts:["주석 — 실행되지 않는 설명","더 빨리 실행되는 코드","오류 표시","문자열 값"],ans:0,e:"주석은 사람을 위한 설명으로 실행에서 제외된다."},
{d:"PROG",f:"mc",q:"게임 시작 시 딱 한 번 초기화 코드를 실행하고 싶다. 어디에 두는가?",opts:["Start() 또는 Awake()","Update()","매 프레임 OnGUI","아무 데나"],ans:0,e:"1회 초기화는 Awake/Start, 반복 처리는 Update 계열."},
{d:"PROG",f:"order",q:"NullReferenceException을 해결하는 순서를 배열하시오.",items:["오류 로그에서 발생 스크립트와 줄 번호 확인","그 줄에서 null일 수 있는 참조 찾기","Inspector 연결·GetComponent 반환값 확인","참조를 보장한 뒤 재실행으로 검증"],e:"로그→의심 참조→연결 확인→검증."},
{d:"PROG",f:"mc",q:"bool isDead = false; 일 때 if (!isDead) { ... } 블록은?",opts:["실행된다 — !는 부정 연산자","실행되지 않는다","오류가 난다","무한 반복된다"],ans:0,e:"!false = true. 부정 연산자는 조건 로직의 기본이다."},

/* ----- Physics (+10) ----- */
{d:"PHYS",f:"mc",q:"아이템에 닿아도 OnTriggerEnter가 호출되지 않는다. 점검 목록으로 옳은 것은?",opts:["isTrigger 체크 · 한쪽에 Rigidbody · 양쪽 Collider — 셋 다 확인","태그만 확인","색상 확인","씬 이름 확인"],ans:0,e:"트리거 3요소: 겹침 감지 설정 + 물리 주체 + 충돌체."},
{d:"PHYS",f:"mc",q:"캐릭터가 벽을 통과한다. 원인 후보로 가장 거리가 먼 것은?",opts:["배경음악 볼륨","벽에 Collider가 없음","콜라이더의 isTrigger가 켜짐","Transform 직접 이동으로 물리를 무시함"],ans:0,e:"관통은 충돌체·트리거·이동 방식 문제다. 오디오는 무관."},
{d:"PHYS",f:"mc",q:"Rigidbody.velocity를 직접 설정하면?",opts:["현재 속도가 즉시 그 값으로 바뀐다","질량이 바뀐다","중력이 사라진다","콜라이더가 커진다"],ans:0,e:"velocity 직접 설정은 즉각적 속도 제어(대시 등)에 쓰인다."},
{d:"PHYS",f:"mc",q:"점프가 공중에서 또 되는(2단 점프 버그) 가장 유력한 원인은?",opts:["접지 확인 없이 입력 때마다 힘을 가하기 때문","텍스처가 커서","조명이 어두워서","씬 이름이 길어서"],ans:0,e:"바닥 체크(레이캐스트 등) 없이 점프를 허용하면 생기는 전형적 버그다."},
{d:"PHYS",f:"mc",q:"OnCollisionStay가 호출되는 시점은?",opts:["충돌이 유지되는 동안 계속","충돌 시작 시 1회","충돌 종료 시 1회","씬 시작 시"],ans:0,e:"Enter/Stay/Exit = 시작/지속/종료."},
{d:"PHYS",f:"mc",q:"얼음판처럼 미끄러운 바닥을 만들려면?",opts:["마찰(Friction)을 낮춘 Physic Material을 콜라이더에 적용","Rigidbody 제거","태그 변경","그림자 끄기"],ans:0,e:"표면 물리 특성은 Physic Material로 정의한다."},
{d:"PHYS",f:"mc",q:"플레이어가 들어오면 이벤트가 시작되는 '보이지 않는 감지 구역'의 구성은?",opts:["isTrigger 켠 Collider + OnTriggerEnter 스크립트","카메라 추가","라이트 추가","캔버스 추가"],ans:0,e:"트리거 볼륨은 이벤트 연출의 기본 도구다."},
{d:"PHYS",f:"mc",q:"특정 오브젝트에만 다른 중력을 주고 싶다(3D). 일반적 방법은?",opts:["Use Gravity를 끄고 스크립트로 원하는 중력을 직접 가한다","프로젝트 중력을 바꾼다(전체 영향)","씬을 분리한다","불가능하다"],ans:0,e:"개별 중력은 AddForce로 커스텀 적용한다."},
{d:"PHYS",f:"match",q:"물리 콜백과 호출 시점을 짝지으시오.",left:["OnCollisionEnter","OnCollisionExit","OnTriggerEnter","OnTriggerExit"],right:["물리 충돌 시작","물리 충돌 종료","트리거 겹침 시작","트리거 겹침 종료"],e:"충돌·트리거 콜백 세트."},
{d:"PHYS",f:"mc",q:"동전은 닿으면 사라지고, 벽은 튕겨야 한다. 옳은 설정은?",opts:["동전은 isTrigger 켬, 벽은 isTrigger 끔","둘 다 켬","둘 다 끔","동전에서 Collider 제거"],ans:0,e:"수집형=트리거, 차단형=일반 충돌."},

/* ----- Animation (+8) ----- */
{d:"ANIM",f:"mc",q:"달리는데 애니메이션이 Idle에서 바뀌지 않는다. 우선 확인할 것은?",opts:["전환 조건과 파라미터 값이 실제로 변하는지(Animator 창 실시간 확인)","텍스처 해상도","배경음 볼륨","빌드 설정"],ans:0,e:"Play 중 Animator 창에서 파라미터·현재 상태를 눈으로 확인하는 것이 지름길이다."},
{d:"ANIM",f:"mc",q:"Play 중 Animator 창을 열면 확인할 수 있는 것은?",opts:["현재 상태와 전환 진행이 실시간으로 하이라이트된다","아무것도 보이지 않는다","코드가 수정된다","라이트맵이 보인다"],ans:0,e:"상태 기계 디버깅의 기본 화면이다."},
{d:"ANIM",f:"mc",q:"점프 모션이 끝나지 않고 계속 반복된다. 원인은?",opts:["클립 임포트 설정의 Loop Time이 켜져 있음","파라미터가 많아서","카메라 문제","태그 문제"],ans:0,e:"일회성 동작 클립은 Loop Time을 꺼야 한다."},
{d:"ANIM",f:"mc",q:"Blend Tree에 연결하기에 적절한 파라미터 타입은?",opts:["Float (예: 이동 속도)","Trigger","문자열","색상"],ans:0,e:"Blend Tree는 연속 값(Float)으로 클립을 혼합한다."},
{d:"ANIM",f:"mc",q:"발소리 타이밍이 반 박자 이르다. 조정할 것은?",opts:["Animation Event가 걸린 프레임 위치","전체 볼륨","텍스처","조명"],ans:0,e:"이벤트 프레임을 발이 닿는 순간으로 옮긴다."},
{d:"ANIM",f:"mc",q:"같은 Animator Controller를 여러 캐릭터가 공유하면?",opts:["상태 구조는 공유하되 각자 독립적으로 재생된다","모두 똑같이 동시에 움직인다","오류가 난다","한 캐릭터만 동작한다"],ans:0,e:"컨트롤러는 설계도, 재생 상태는 개체별이다."},
{d:"ANIM",f:"mc",q:"공격 버튼 연타 시 모션이 꼬인다. 일반적인 대응은?",opts:["전환 조건·Exit Time 정리와 재발동 차단 로직 추가","볼륨 조절","텍스처 압축","씬 리로드"],ans:0,e:"재생 중 재발동을 제어(쿨다운·상태 확인)해야 한다."},
{d:"ANIM",f:"order",q:"피격 리액션을 구현하는 순서를 배열하시오.",items:["피격 판정 발생","SetTrigger로 피격 파라미터 발동","Any State에서 피격 상태로 전이","재생 종료 후 원래 상태로 복귀"],e:"판정→발동→전이→복귀."},

/* ----- Asset (+8) ----- */
{d:"ASSET",f:"mc",q:"프리팹 원본을 수정하면 씬에 있는 인스턴스들은?",opts:["Override하지 않은 속성은 모두 함께 갱신된다","아무 변화 없다","전부 삭제된다","무작위로 달라진다"],ans:0,e:"원본-인스턴스 동기화가 프리팹의 핵심 가치다."},
{d:"ASSET",f:"mc",q:"컴포넌트 자리에 'Missing (Script)'가 표시되는 원인은?",opts:["연결된 스크립트가 삭제·이동되어 참조가 깨짐","씬 용량 초과","Play 중 수정","카메라 없음"],ans:0,e:"파일 삭제·이름 변경·메타 유실 시 발생한다."},
{d:"ASSET",f:"mc",q:"팀원이 준 .unitypackage 파일을 프로젝트에 넣는 방법은?",opts:["Assets > Import Package로 가져온다","바탕화면에 압축 해제한다","브라우저로 연다","이름만 바꾼다"],ans:0,e:"unitypackage는 에디터의 Import로 안전하게 반영한다."},
{d:"ASSET",f:"mc",q:"텍스처가 유난히 흐릿하다. 임포트 설정에서 확인할 것은?",opts:["Max Size(최대 크기)와 압축 품질","Loop Time","Collider","Tag"],ans:0,e:"Max Size가 원본보다 작게 잡히면 다운스케일되어 흐려진다."},
{d:"ASSET",f:"mc",q:"모델이 분홍색(마젠타)으로 보인다. 의미는?",opts:["머티리얼/셰이더가 깨졌거나 렌더 파이프라인과 맞지 않음","정상 상태","조명이 부족함","물리 오류"],ans:0,e:"마젠타는 셰이더 실패의 보편적 신호다(URP 변환 누락 등)."},
{d:"ASSET",f:"mc",q:"프로젝트를 다른 PC로 옮길 때 복사하지 않아도 되는 폴더는?",opts:["Library (자동 재생성됨)","Assets","ProjectSettings","Packages"],ans:0,e:"Library/Temp는 캐시라 첫 실행 때 다시 만들어진다."},
{d:"ASSET",f:"match",q:"임포트 설정과 대상 에셋을 짝지으시오.",left:["Scale Factor","Sprite Mode","Loop Time","Compression"],right:["3D 모델 크기 보정","텍스처의 스프라이트 분할 방식","애니메이션 클립 반복 여부","텍스처·오디오 용량 절감"],e:"에셋 유형별 핵심 임포트 옵션."},
{d:"ASSET",f:"mc",q:"Resources 폴더를 남용하지 말라는 이유는?",opts:["담긴 에셋이 빌드에 모두 포함되고 메모리 관리가 어려워져서","폴더 이름이 길어서","색상 문제","물리 오류"],ans:0,e:"Resources는 필요 최소한으로 — 참조 방식이 우선이다."},

/* ----- UI (+8) ----- */
{d:"UI",f:"mc",q:"버튼을 눌러도 반응이 없다. 점검 항목으로 가장 거리가 먼 것은?",opts:["씬의 조명 밝기","씬에 EventSystem 존재 여부","버튼의 Interactable 상태","버튼 앞을 가리는 다른 UI(Raycast)"],ans:0,e:"클릭 문제는 이벤트 시스템·상태·레이캐스트 차단 순으로 본다."},
{d:"UI",f:"mc",q:"기기를 가로↔세로로 돌리면 UI가 깨진다. 기본 대응은?",opts:["앵커와 Canvas Scaler를 해상도 대응으로 설정","기기 교체 안내","텍스처 확대","씬 분리"],ans:0,e:"반응형 UI의 기본은 앵커+스케일러다."},
{d:"UI",f:"mc",q:"일시정지 메뉴 패널을 코드로 열고 닫는 일반적 방법은?",opts:["패널 GameObject를 SetActive(true/false)로 토글","씬 재로드","카메라 삭제","텍스트 색만 변경"],ans:0,e:"패널 on/off가 표준 패턴이다(+timeScale 0 병행)."},
{d:"UI",f:"mc",q:"점수 텍스트가 다른 UI에 가려 보이지 않는다. 확인할 것은?",opts:["그리기 순서 — Hierarchy에서 아래 있을수록 위에 그려짐","오디오 설정","물리 설정","빌드 설정"],ans:0,e:"UI는 Hierarchy 순서가 곧 렌더 순서다."},
{d:"UI",f:"mc",q:"긴 아이템 목록을 스크롤되게 만드는 구성은?",opts:["Scroll View (Scroll Rect + Mask + Content)","Slider","Toggle","Dropdown"],ans:0,e:"스크롤 뷰가 목록 UI의 기본이다."},
{d:"UI",f:"mc",q:"여러 선택지 중 '하나만' 고르게 하는 UI 구성은?",opts:["Dropdown 또는 Toggle Group","InputField","Image","RawImage"],ans:0,e:"Toggle Group은 라디오 버튼처럼 단일 선택을 보장한다."},
{d:"UI",f:"mc",q:"버튼 위 텍스트가 클릭을 가로채는 문제를 막으려면?",opts:["텍스트의 Raycast Target을 해제한다","버튼을 삭제한다","폰트를 바꾼다","씬을 재시작한다"],ans:0,e:"클릭이 필요 없는 UI는 Raycast Target을 꺼서 이벤트를 통과시킨다."},
{d:"UI",f:"mc",q:"HUD가 3D 오브젝트보다 항상 위에 그려지는 이유는?",opts:["Screen Space Canvas는 씬 렌더 후 화면 위에 얹혀 그려지기 때문","우연이다","조명 때문","물리 때문"],ans:0,e:"스크린 스페이스 UI는 씬과 별도 단계로 렌더링된다."},

/* ----- Lighting (+6) ----- */
{d:"LIGHT",f:"mc",q:"야외 낮 장면의 기본 광원 구성으로 적절한 것은?",opts:["Directional Light 1개 + 환경광(스카이박스)","Point Light 100개","Spot Light만","광원 없음"],ans:0,e:"태양=디렉셔널 + 하늘빛=환경광이 표준 구성이다."},
{d:"LIGHT",f:"mc",q:"실내 촛불 분위기에 어울리는 조명은?",opts:["따뜻한 색(주황)의 Point Light + 짧은 Range","차가운 Directional","강한 백색광","그림자 제거"],ans:0,e:"색온도와 도달 범위로 분위기를 만든다."},
{d:"LIGHT",f:"mc",q:"라이트맵을 베이크했는데 결과가 반영되지 않는다. 확인할 것은?",opts:["대상 오브젝트의 Static 체크와 라이트의 Mode(Baked)","오디오 설정","태그","물리 설정"],ans:0,e:"베이크 대상 조건(Static+Baked 모드)을 만족해야 구워진다."},
{d:"LIGHT",f:"mc",q:"그림자 가장자리가 계단처럼 지글거린다. 조절할 설정은?",opts:["그림자 해상도(Shadow Resolution)·Bias","마스터 볼륨","FOV만","텍스처 압축"],ans:0,e:"그림자 품질·바이어스 조정으로 계단 현상과 그림자 아크네를 줄인다."},
{d:"LIGHT",f:"mc",q:"낮 씬을 밤 분위기로 바꾸는 기본 접근은?",opts:["광원 세기·색과 환경광을 어둡고 차갑게 조정","오브젝트 삭제","카메라 끄기","텍스처 삭제"],ans:0,e:"광원 파라미터와 환경광이 씬 무드의 뼈대다."},
{d:"LIGHT",f:"mc",q:"Emission 머티리얼로 네온 간판을 만들었는데 주변이 밝아지지 않는다. 이유는?",opts:["Emission은 스스로 밝게 보일 뿐 — 주변을 비추려면 GI 베이크나 실제 광원이 필요","버그라서","원래 불가능해서","물리 문제"],ans:0,e:"발광 표현과 실제 조명 기여는 별개다."},

/* ----- Audio (+5) ----- */
{d:"AUDIO",f:"mc",q:"캐릭터가 멀어져도 발소리 크기가 그대로다. 원인은?",opts:["Spatial Blend가 2D(0)로 되어 있음","볼륨이 커서","클립 손상","씬 문제"],ans:0,e:"거리 감쇠는 3D(1) 설정이어야 작동한다."},
{d:"AUDIO",f:"mc",q:"씬을 이동할 때마다 배경음악이 처음부터 다시 시작된다. 원인은?",opts:["씬마다 새로 생성되는 AudioSource(DontDestroyOnLoad 미적용)","볼륨 문제","포맷 문제","카메라 문제"],ans:0,e:"음악 오브젝트를 씬 전환에도 유지시켜야 이어진다."},
{d:"AUDIO",f:"mc",q:"게임에서 소리가 전혀 안 들린다. 가장 먼저 확인할 것은?",opts:["씬에 Audio Listener가 있는지와 음소거(Mute Audio) 여부","조명","물리","태그"],ans:0,e:"듣는 귀(Listener)가 없으면 아무 소리도 안 난다."},
{d:"AUDIO",f:"mc",q:"총소리 피치를 재생마다 조금씩 다르게 주는 이유는?",opts:["반복음의 기계적인 느낌을 줄여 자연스럽게 하려고","용량 절감","버그 방지","규정 준수"],ans:0,e:"피치 랜덤화는 반복 효과음의 표준 테크닉이다."},
{d:"AUDIO",f:"mc",q:"대사가 나올 때 배경음이 자동으로 작아지게 하는 Audio Mixer 기능은?",opts:["Duck Volume(더킹)","Loop","Mute","Pitch"],ans:0,e:"더킹은 특정 그룹 신호에 따라 다른 그룹 볼륨을 낮춘다."},

/* ----- Materials & Effects (+5) ----- */
{d:"MAT",f:"mc",q:"폭발 이펙트에서 불꽃이 사방으로 퍼지게 하는 파티클 설정은?",opts:["Shape 모듈을 구형(Sphere) 방출로","Emission 끄기","색만 변경","크기 축소"],ans:0,e:"Shape 모듈이 방출 형태(구·원뿔 등)를 정한다."},
{d:"MAT",f:"mc",q:"파티클이 바닥·벽을 뚫고 지나간다. 막으려면?",opts:["Collision 모듈을 활성화한다","Emission을 늘린다","색을 바꾼다","크기를 줄인다"],ans:0,e:"파티클 충돌은 Collision 모듈로 처리한다."},
{d:"MAT",f:"mc",q:"흐르는 물 표면 질감은 보통 무엇을 움직여 구현하는가?",opts:["텍스처 오프셋(UV 스크롤)","카메라","콜라이더","오디오"],ans:0,e:"UV 오프셋 애니메이션이 흐름 표현의 기본이다."},
{d:"MAT",f:"mc",q:"피격 시 캐릭터를 빨갛게 번쩍이게 하려면 코드로 무엇을 바꾸나?",opts:["Renderer의 material.color","텍스처 파일 자체","씬 재로드","조명 색만"],ans:0,e:"머티리얼 색상 속성 변경이 표준 히트 플래시 기법이다."},
{d:"MAT",f:"mc",q:"눈 내리는 파티클에서 눈송이가 아래로 떨어지게 하는 설정은?",opts:["Gravity Modifier(또는 아래 방향 속도)","루프 해제","색상 변경","카메라 회전"],ans:0,e:"중력 계수·시작 속도로 낙하 움직임을 만든다."},

/* ----- Game Design (+5) ----- */
{d:"GDES",f:"mc",q:"난이도가 갑자기 치솟는 구간에서 플레이어의 일반적 반응은?",opts:["좌절하고 이탈하기 쉽다","무조건 더 재미있어한다","실력이 자동으로 오른다","아무 영향 없다"],ans:0,e:"완만한 난이도 곡선과 재도전 유도가 이탈을 막는다."},
{d:"GDES",f:"mc",q:"가변(랜덤) 보상의 심리적 효과는?",opts:["기대감을 자극해 반복 행동을 유도한다","항상 부정적이다","성능을 높인다","저장 용량을 줄인다"],ans:0,e:"불확실한 보상은 강한 동기 요소다(남용 시 윤리 문제도 고려)."},
{d:"GDES",f:"mc",q:"플레이어들이 '어디서 막히는지' 파악하기 좋은 방법은?",opts:["플레이 관찰 기록과 사망·이탈 지점 데이터 수집","소문 수집","개발자 감으로 추측","광고 데이터만"],ans:0,e:"관찰+데이터가 레벨 개선의 근거다."},
{d:"GDES",f:"mc",q:"게임 첫 5분(온보딩) 설계가 특히 중요한 이유는?",opts:["초반 이탈이 가장 많아 첫 경험이 잔존율을 좌우해서","엔딩이 더 중요해서","광고 규정 때문","심의 때문"],ans:0,e:"첫인상 구간의 학습·재미 설계가 유지율을 결정한다."},
{d:"GDES",f:"mc",q:"'이 게임의 핵심 재미'를 한 문장으로 정의해 두는 이유는?",opts:["기능을 넣고 뺄 때 판단 기준이 되기 때문","마케팅 문구 전용이라서","형식적 절차라서","무관하다"],ans:0,e:"코어 정의는 스코프 관리와 일관성의 나침반이다."},

/* ----- Services (+4) ----- */
{d:"SVC",f:"mc",q:"업데이트 후 특정 스테이지에서 이탈이 급증했다. 확인에 쓸 도구는?",opts:["Analytics의 퍼널·이벤트 분석","텍스처 뷰어","오디오 믹서","NavMesh 베이크"],ans:0,e:"단계별 퍼널로 이탈 지점을 좁혀 원인을 찾는다."},
{d:"SVC",f:"mc",q:"클라우드 저장(계정 연동 세이브)의 이점은?",opts:["기기 변경·재설치에도 진행 상황이 유지된다","프레임률 향상","용량 증가","광고 제거"],ans:0,e:"계정 기반 저장은 이용자 자산 보호의 기본이다."},
{d:"SVC",f:"mc",q:"A/B 테스트를 설계할 때 지켜야 할 원칙은?",opts:["한 번에 한 요소만 바꿔 비교한다","모든 요소를 동시에 바꾼다","표본 1명이면 충분하다","결과와 무관하게 결정한다"],ans:0,e:"변인 통제가 안 되면 무엇이 효과였는지 알 수 없다."},
{d:"SVC",f:"mc",q:"소프트 론칭(일부 지역 선출시)의 목적은?",opts:["지표와 안정성을 실사용자로 검증한 뒤 확장하려고","전 세계 동시 공개를 위해","가격 인상을 위해","광고 중단을 위해"],ans:0,e:"작게 열어 검증하고 크게 여는 출시 전략이다."},

/* ----- Project Mgmt (+4) ----- */
{d:"PMGT",f:"mc",q:"스프린트 회고(Retrospective)에서 다루는 내용은?",opts:["잘된 점·개선점·다음에 시도할 것","급여 협상","인사 평가만","코드 문법 강의"],ans:0,e:"회고는 프로세스를 개선하는 정기 점검이다."},
{d:"PMGT",f:"mc",q:"좋은 버그 리포트에 반드시 들어가야 할 것은?",opts:["재현 절차·기대 결과·실제 결과","감상문","익명 불만","스크린샷 금지 조항"],ans:0,e:"재현 가능해야 고칠 수 있다."},
{d:"PMGT",f:"mc",q:"기능별로 브랜치를 나눠 개발하는 이유는?",opts:["메인 코드의 안정성을 지키며 독립적으로 개발·검토하려고","용량 절감","일부러 속도를 늦추려고","규정이라서"],ans:0,e:"브랜치 전략은 협업 충돌·리스크를 줄인다."},
{d:"PMGT",f:"mc",q:"마감이 촉박할 때 가장 먼저 검토할 것은?",opts:["범위(스코프) 축소 — 핵심 기능 우선 완성","무조건 밤샘","품질 전면 포기","팀 해체"],ans:0,e:"일정·품질·범위 중 조정 1순위는 범위다."},

/* ----- Game Art (+3) ----- */
{d:"GART",f:"mc",q:"로우폴리(Low-poly) 스타일의 장점은?",opts:["가벼운 성능과 뚜렷한 스타일 정체성","무조건 사실적임","용량이 커짐","제작이 불가능함"],ans:0,e:"성능과 미학을 동시에 잡는 선택지다."},
{d:"GART",f:"mc",q:"캐릭터 실루엣이 중요한 이유는?",opts:["색·디테일 없이도 한눈에 구분되는 가독성 때문","용량 때문","물리 때문","사운드 때문"],ans:0,e:"실루엣 테스트는 캐릭터 디자인의 기본 검증법이다."},
{d:"GART",f:"mc",q:"바닥에 반복 사용할 타일 텍스처 제작 시 신경 쓸 것은?",opts:["이음새가 보이지 않는 반복(Seamless) 처리","최대 해상도로만","무작위 색상","투명도"],ans:0,e:"심리스 처리가 안 되면 격자 무늬가 드러난다."},

/* ----- Navigation (+3) ----- */
{d:"NAV",f:"mc",q:"적 AI가 쫓아오다 특정 통로 앞에서 멈춘다. 확인할 것은?",opts:["그 통로가 NavMesh(파란 영역)로 베이크되어 있는지","볼륨","텍스처","태그"],ans:0,e:"에이전트는 NavMesh 위로만 이동한다 — 베이크 범위부터 확인."},
{d:"NAV",f:"mc",q:"문이 열렸는데도 AI가 통과하지 못한다. 대응은?",opts:["문에 NavMesh Obstacle(Carve)을 붙여 열림/닫힘에 따라 경로가 갱신되게 한다","PC 재부팅","조명 재베이크","텍스처 교체"],ans:0,e:"동적 개폐물은 Obstacle Carve로 실시간 반영한다."},
{d:"NAV",f:"mc",q:"에이전트가 좁은 문을 지나가지 못한다. 조정할 것은?",opts:["베이크 설정의 Agent Radius를 줄이거나 문 폭을 넓힌다","이동 속도 증가","색상 변경","볼륨 조절"],ans:0,e:"반경 기준으로 통로 통과 가능성이 판정된다."},

/* ----- Employment (+2) ----- */
{d:"EMP",f:"mc",q:"채용 공고의 자격 요건을 일부만 충족할 때 현실적인 조언은?",opts:["핵심 요건 충족과 학습 의지를 근거로 지원해 볼 수 있다","하나라도 부족하면 절대 지원 금지","허위로 채워서 지원","무응답이 최선"],ans:0,e:"요건은 이상적 프로필인 경우가 많다 — 정직하게 어필하며 도전한다."},
{d:"EMP",f:"mc",q:"깃허브/링크드인 프로필 관리 요령으로 옳은 것은?",opts:["대표 프로젝트를 고정하고 README·설명을 정리한다","비공개 유지가 항상 유리하다","빈 저장소 수만 늘린다","가입 후 방치한다"],ans:0,e:"보여줄 것을 선별·정리하는 것이 프로필 관리의 핵심이다."},

/* ----- Industry (+1) ----- */
{d:"IND",f:"mc",q:"얼리 액세스(Early Access) 출시의 특징은?",opts:["미완성 단계에 공개해 피드백과 수익을 받으며 개발을 지속한다","완성작만 출시 가능하다","무료가 의무다","심의가 면제된다"],ans:0,e:"커뮤니티와 함께 완성해 가는 출시 모델이다."},
];
