import type { ImageMetadata } from 'astro';
import chordTrainerIcon from '../assets/icons/chordtrainer.png';
import sketchChordIcon from '../assets/icons/sketchchord.png';
import menuCartIcon from '../assets/icons/menucart.png';

export type AppCategory =
  | 'All'
  | 'Music'
  | 'Lifestyle'
  | 'Education'
  | 'Creativity'
  | 'Utility';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AppItem {
  slug: string;
  name: string;
  subtitle: string;
  category: Exclude<AppCategory, 'All'>;
  tags: Exclude<AppCategory, 'All'>[];
  version: string;
  iosRequirement: string;
  releaseDate: string;
  lastUpdated: string;
  appStoreUrl: string;
  supportEmail: string;
  badges?: string[];
  iconUrl: ImageMetadata;
  iconBg: string;
  iconFg?: string;
  iconSvg?: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  faqs: FAQItem[];
  dataCollected: string[];
  thirdPartyServices: { name: string; purpose: string; policyUrl: string }[];
  inAppPurchases: string;
  privacySummary: {
    overviewJa: string;
    overviewEn: string;
    purposeItemsJa: string[];
    retentionItemsJa: string[];
  };
  termsSummary: {
    licenseScopeJa: string;
    iapTermsJa: string;
    ipRightsJa: string;
  };
}

export const CATEGORIES: AppCategory[] = [
  'All',
  'Music',
  'Lifestyle',
  'Education',
  'Creativity',
  'Utility',
];

export const DEVELOPER_INFO = {
  studioName: 'Junichi MIZUKAMI',
  handle: 'Junichi MIZUKAMI',
  status: 'Live',
  contactEmail: 'app-support@250tr.com',
  jurisdiction: 'Tokyo, Japan',
  established: '2026',
};

export const APPS: AppItem[] = [
  {
    slug: 'chord-trainer',
    name: 'ChordTrainer',
    subtitle: 'MIDIピアノ・コード瞬発力トレーニング',
    category: 'Music',
    tags: ['Music', 'Education'],
    version: '1.0',
    iosRequirement: 'iOS 17.6+ / iPadOS 17.6+ / Mac Catalyst',
    releaseDate: '2026-10-01',
    lastUpdated: '2026-10-29',
    appStoreUrl: 'https://apps.apple.com',
    supportEmail: 'app-support@250tr.com',
    badges: ['Universal', 'CoreMIDI対応'],
    iconUrl: chordTrainerIcon,
    iconBg: '#3B82F6',
    shortDescription:
      'MIDIキーボードを繋いでピアノのコード・ボイシング・コード進行の「瞬発力」をゲーム感覚で鍛え上げる実践的トレーニングアプリ。完全無料・広告なし。',
    longDescription:
      '「理論書でコードは覚えたけれど、鍵盤を前にするとパッと指が動かない」「ジャズやポップスの定番コード進行をスムーズに両手で繋ぎたい」というキーボーディスト、作曲家、DTMerのために設計されました。USBまたはBluetooth接続されたMIDIキーボード（Apple CoreMIDI）の押下音をゼロレイテンシーで検出し、正解和音とリアルタイム照合。大型タッチ鍵盤も備えており、iPhone・iPad・Mac単体でも本格的なボイシング練習が可能です。',
    features: [
      'Apple CoreMIDI対応：USB / Bluetooth MIDIキーボードの押下音をゼロレイテンシーでリアルタイム判定',
      '4つの出題モード：「すべて（ランダム）」「コード進行」「カスタム（マイセット）」「チェックのみ（★苦手克服）」',
      '実践的なコード進行モード：ツーファイブワン（II-V-I）、丸サ進行、カノン進行、小室進行、王道進行などをステップ自動送り＆デモ再生付きで収録',
      'MIDI手元操作（MIDI Learn機能）：鍵盤の両端キー（A0/C8等）やドラムパッドに「次へ」「前へ」を割り当て、画面に触れず連続練習',
      '大型インタラクティブ鍵盤の3色カラーガイド：最低音（赤）・ルート音（橙）・構成音（黄）・リアルタイム押下音（青）を視覚的にハイライト',
      '6種類の高品位サウンドプリセット（ピアノ・エレピ・オルガン・シンセ・8-bit・オルゴール）＆ 第1〜第3転回形（Inversion）出題オプション',
      'サポーター特典（Tip Jar ¥100）：バロック時代の歴史的鍵盤楽器を再現した「チェンバロ配色鍵盤（白黒反転）」テーマをアンロック',
    ],
    faqs: [
      {
        question: 'MIDIキーボードを接続しても認識されません',
        answer:
          '1. USBケーブルや変換アダプタが正しく奥まで挿入されているか確認してください。2. バスパワー不足の場合、セルフパワー式のUSBハブ経由で接続してください。3. Bluetooth MIDIの場合は、iOSの「設定」>「Bluetooth」またはDAW系アプリで接続済みになっているかご確認ください。4. 画面下のステータスバーに「接続MIDI: (機器名)」と表示されれば正常に認識されています。',
      },
      {
        question: '正しい音を押しているのに正解になりません',
        answer:
          '「転回形を含めて出題する」がオンになっている場合、指定されたベース音（最低音）や転回形の構成音通りに押さえる必要があります。また、余計な隣接キーを軽く触ってしまっていないかもステータスバーの「押下中ノート」でご確認ください。',
      },
      {
        question: 'デバイスを変更した時、チップ購入（サポーター特典）は引き継がれますか？',
        answer:
          'はい。「設定・MIDI割当」画面の最下部にある「購入情報を復元」ボタンをタップすると、同一のApple IDで購入したサポーター特典（クラウンバッジおよびチェンバロ配色鍵盤）を照合・同期することができます。',
      },
      {
        question: 'アプリから音が出ません',
        answer:
          'iPadやiPhoneの「消音モード（マナーモード）」がオンになっていると音が出ない場合があります。コントロールセンターで消音モードを解除し、音量を上げてください。',
      },
    ],
    dataCollected: [
      'カスタム練習セット・ブックマーク（★チェックしたコード）・転回形設定・MIDIノート割当設定（すべてお使いの端末内のローカルストレージにのみ保存され、外部サーバーへは一切送信されません）',
      'MIDIキーボード入力データ（Apple CoreMIDIを通じてリアルタイムの和音判定および発音処理にのみメモリ上で使用され、記録・外部送信は行われません）',
      'サポーターチップ購入状態（Apple StoreKit 2 により端末上で安全に検証され、決済情報や個人情報を当方が取得・保持することはありません）',
    ],
    thirdPartyServices: [
      {
        name: 'Apple StoreKit 2 (App Store In-App Purchase)',
        purpose:
          '開発者応援チップ（¥100）の決済処理およびサポーター特典（チェンバロ配色鍵盤）の購入復元・検証にのみ使用します。',
        policyUrl: 'https://www.apple.com/legal/privacy/',
      },
    ],
    inAppPurchases:
      'アプリの全トレーニング機能は完全無料・広告なしでご利用いただけます。任意の開発者応援チップ「コーヒーをごちそう（¥100 / StoreKit 2 消耗型App内課金）」をご購入いただくと、サポーター特典としてクラウンバッジおよび「チェンバロ配色鍵盤（白黒反転）」テーマがアンロックされます。',
    privacySummary: {
      overviewJa:
        '「ChordTrainer」は、完全オフライン動作・広告なし・トラッキングなしで設計されたMIDIコードトレーニングアプリです。アカウント登録は不要であり、ユーザーの演奏データや設定情報が外部サーバーへ送信・収集されることは一切ありません。',
      overviewEn:
        'ChordTrainer is a MIDI piano chord training application built with a strict offline-first, zero-tracking, and ad-free architecture. No user accounts are required, and your MIDI performance inputs and custom practice sets never leave your device.',
      purposeItemsJa: [
        'USB / Bluetooth MIDIキーボード（CoreMIDI）からのノート入力を端末内でリアルタイム判定・発音するため',
        'ユーザーが作成した「カスタム練習セット」「★ブックマークしたコード」「MIDI Learn 割り当て設定」を端末内に保存・復元するため',
        'Apple StoreKit 2 を通じて開発者応援チップ（Tip Jar）の決済検証およびサポーター特典（チェンバロ配色鍵盤）のアンロック状態を反映するため',
      ],
      retentionItemsJa: [
        'すべての学習設定データ（カスタムセット、ブックマーク、MIDI割当）はお使いのデバイス内にのみ保存されます。アプリをアンインストールすると端末内のデータも完全に削除されます。',
        '当方は外部データベースやトラッキングサーバーを一切運用していないため、当方サーバー上にユーザーデータが保持されることはありません。',
      ],
    },
    termsSummary: {
      licenseScopeJa:
        '当方はユーザーに対し、Appleの標準エンドユーザー使用許諾契約（Standard Licensed Application EULA）に従い、ご自身が所有または管理するiPhone、iPad、またはMac上で「ChordTrainer」を非独占的かつ個人的に利用する権利を許諾します。',
      iapTermsJa:
        '本アプリの基本機能はすべて無料・広告なしで提供されます。任意の「開発者を応援する（コーヒーをごちそう ¥100）」は Apple StoreKit 2 を用いた消耗型App内課金であり、1回以上のご支援によってサポーター限定特典（クラウンバッジおよびチェンバロ配色鍵盤）が解放されます。機種変更時は設定画面の「購入情報を復元」から同一Apple IDで特典を引き継ぐことができます。',
      ipRightsJa:
        '本アプリ内のプログラム、UIデザイン、チェンバロ配色を含む鍵盤グラフィック、内蔵音源プリセットに関する知的財産権は当方に帰属します。ユーザーが本アプリを用いて習得した演奏スキルや作成したカスタムコードセットの活用について一切の制限はありません。',
    },
  },
  {
    slug: 'sketch-chord',
    name: 'SketchChord',
    subtitle: 'リードシート感覚の直感型コード進行スケッチアプリ',
    category: 'Music',
    tags: ['Music', 'Creativity'],
    version: '1.0',
    iosRequirement: 'iOS 18.6+ / iPadOS 18.6+ / macOS 15.7+',
    releaseDate: '2026-10-01',
    lastUpdated: '2026-10-29',
    appStoreUrl: 'https://apps.apple.com',
    supportEmail: 'app-support@250tr.com',
    badges: ['Universal', 'AVAudioEngine対応'],
    iconUrl: sketchChordIcon,
    iconBg: '#2563EB',
    shortDescription:
      '手書きリードシート（コード譜）のような五線譜UI上で、1小節4拍のスロットにコードを直感的に並べて試聴・スケッチできる作曲アシスタントアプリ。',
    longDescription:
      'SketchChord は、作曲家・キーボーディスト・トラックメイカーのために設計された直感的コード進行スケッチ＆試聴アプリです。紙のスケッチブックにコードを書く感覚で五線譜の拍スロットにコードを配置でき、プロのキーボーディストが弾く5つのスマートボイシング（Root + Guide Tones / Drop 2 / Rootless 等）へ自動変換。AVAudioEngine による高精度リアルタイムPCM合成音源（Electric Piano / Warm Piano / Soft Pad）を搭載し、外部音源なしで美しい響きを即座に確認できます。',
    features: [
      '手書き楽譜ライクな五線譜UI：1小節4拍のスロットとタイ（伸ばす）記号に対応し、緑色プレイヘッドでリアルタイム再生',
      'ダイアトニックパレット & カスタムコードビルダー：調性に沿った度数（I〜VII、トニック/サブドミナント/ドミナント機能色分け、マイナー3種対応）と、add9・m7♭5・7(♭9)・分数オンコード等の自由構築',
      '5つのスマートボイシング自動計算：「ルート + ガイドトーン（3rd/7th）」「基本（クローズ）」「オープン（Drop 2）」「ルートレス（Jazz）」「オクターブベース + コード」',
      'ボイスリーディング & クイック転回バー：ベース転回（オンコード）と右手ボイシング転回（RH Inversion）をワンクリックで切り替え、3オクターブ鍵盤ビジュアライザーで視覚化',
      'リピート記号シーケンサー & セクション編集：反復記号（|: / :|）の自動2回ループ演奏、[Intro] [A] [B] [Chorus] 等のセクション枠線、4小節行コピー機能',
      'AVAudioEngine リアルタイムPCM合成エンジン：ベル倍音を含む Electric Piano、木製の温かみを持つ Warm Piano、ふくよかな Soft Pad を内蔵',
      '自動保存（Auto-Save）& リードシートテキスト共有：作成したスケッチを JSON 形式で安全にローカル永続化し、整形されたテキストコード譜としてワンタップでコピー・共有',
    ],
    faqs: [
      {
        question: '音が出ません。どうすれば良いですか？',
        answer:
          'Mac や iPhone / iPad の消音スイッチ（マナーモード）がONになっていないか、システムボリュームがミュートになっていないかご確認ください。Bluetoothイヤホン等の接続直後は、再生ボタンを一度押すことでオーディオエンジン（AVAudioEngine）が自動起動します。',
      },
      {
        question: 'プリセット曲を編集してそのまま保存できますか？',
        answer:
          'プリセットテンプレート（カノン進行・丸の内進行・王道進行・ジャジーロック進行など）の誤った上書きを防ぐため、プリセット曲への直接の上書き保存は制限されています。編集した内容を保存したい場合は、ツールバーの「別名保存」（または Shift+Cmd+S）を押して、マイスケッチとして新規保存してください。',
      },
      {
        question: '1小節まるごと1つのコード（全音符）を鳴らしたいです。',
        answer:
          '1拍目にコードを入力したあと、2拍目・3拍目・4拍目に対して「— 伸ばす」ボタン（または T キー）を3回押してください。楽譜上にタイ記号（—）が配置され、音が途切れずに1小節分美しく持続します。',
      },
      {
        question: 'ノートPCやiPadで画面を広く使いたい時は？',
        answer:
          '⌘ Cmd + K を押すか、パレット右上の「パレットを隠す」ボタンを押してください。下部パレットがスムーズに収納され、画面いっぱいに五線譜が広がります。収納中も現在の選択コードや試聴ボタンはコンパクトに常時表示されます。',
      },
    ],
    dataCollected: [
      '作成した楽曲スケッチデータ（曲名、アーティスト名、Key、BPM、コード進行、セクション設定：お使いの端末内の Application Support 領域に JSON 形式でローカル保存され、外部へは送信されません）',
      'クリップボード出力・共有テキスト（ユーザーが明示的に「テキスト共有 / コピー」を実行した際のみ、OS標準の共有シートまたはクリップボードへコード譜テキストを渡します）',
    ],
    thirdPartyServices: [],
    inAppPurchases:
      '広告表示やトラッキングは一切なく、すべての作曲・スマートボイシング・音源・保存機能をそのままご利用いただけます。',
    privacySummary: {
      overviewJa:
        '「SketchChord」は、作曲家やミュージシャンの創作アイデア（楽曲スケッチ）のプライバシーを最優先に設計されています。すべてのコード譜データや音源合成処理はお使いのデバイス（iOS / iPadOS / macOS）内で完結し、外部サーバーへのデータ送信や行動トラッキングは一切行いません。',
      overviewEn:
        'SketchChord is designed to protect your musical ideas and chord sketches with complete on-device privacy. All score editing, smart voicing calculations, and PCM audio synthesis run 100% locally on your Apple device without any external servers or analytics trackers.',
      purposeItemsJa: [
        'ユーザーが作成・編集したコード進行スケッチ（マイスケッチ）を端末内の Application Support フォルダへ自動保存（Auto-Save）および読み込みするため',
        'AVAudioEngine を用いて端末内でリアルタイムにPCMオーディオ波形を合成・再生するため',
        'ユーザーの操作に基づき、テキスト形式のリードシート（コード譜）をクリップボードまたはOS標準の共有機能へ出力するため',
      ],
      retentionItemsJa: [
        '保存されたスケッチファイル（JSON形式）はお使いの端末内にのみ永続化されます。「マイスケッチ」ライブラリからいつでも個別に削除できるほか、アプリをアンインストールするとすべてのローカルデータが削除されます。',
        '第三者の広告SDKや解析ツールは一切組み込まれていません。',
      ],
    },
    termsSummary: {
      licenseScopeJa:
        '当方はユーザーに対し、Appleの標準エンドユーザー使用許諾契約（Standard Licensed Application EULA）に従い、ご自身が所有または管理するiOS / iPadOS / macOSデバイス上で「SketchChord」を非独占的に利用する権利を許諾します。',
      iapTermsJa:
        '本アプリにはユーザーの創作を妨げる広告表示や強制課金は一切含まれません。万が一将来的に追加パックやApp内課金が導入される場合も、Apple App Storeの決済システム（StoreKit）を通じて明確な同意のもとでのみ提供されます。',
      ipRightsJa:
        '重要（ユーザーの創作物の権利）：ユーザーが本アプリ（SketchChord）を使用して作成・アレンジ・出力したコード進行、楽曲スケッチ、および音楽作品の著作権・商用利用権は、100%ユーザーご自身に帰属します。当方がユーザーの楽曲データに対して権利を主張することは一切ありません。一方、本アプリ自体のソースコード、UIデザイン、PCM合成アルゴリズムに関する知的財産権は当方に帰属します。',
    },
  },
  {
    slug: 'menu-cart',
    name: 'MenuCart',
    subtitle: 'AIレシピ解析 × 1週間献立＆買い物リスト自動合算',
    category: 'Lifestyle',
    tags: ['Lifestyle', 'Utility'],
    version: '1.0',
    iosRequirement: 'iOS 17.0+ / iPadOS 17.0+ / Mac Catalyst',
    releaseDate: '2026-11-06',
    lastUpdated: '2026-11-06',
    appStoreUrl: 'https://apps.apple.com',
    supportEmail: 'app-support@250tr.com',
    badges: ['Universal', 'Gemini AI対応'],
    iconUrl: menuCartIcon,
    iconBg: '#0DA673',
    shortDescription:
      'レシピURLからGemini AIが材料・分量を自動抽出。1週間分の献立を人数に合わせて自動スケーリングし、スーパーの売場別買い物リストを瞬時に合算します。',
    longDescription:
      'MenuCart（メニューカート）は、日々の「献立決め」から「お買い物リスト作成」までの手間を劇的にゼロにするスマート献立＆買い物リスト自動合算アプリです。クックパッドやクラシルなどのレシピURLを貼り付けるだけで、Google Gemini AI が料理名・基準人数・材料リスト・売場カテゴリまで自動抽出。7日間×3食（朝・昼・夕）の献立ボードに配置すると、表記ゆれ（「タマネギ」「たまねぎ」「玉ねぎ」等）を自動で名寄せし、食べる人数に応じた倍率でスーパーの6つの売場別に買い物リストを自動生成します。',
    features: [
      'Gemini AI レシピ自動解析：クックパッド・クラシル・Nadia・DELISH KITCHEN等のURLやテキストから、料理名・基準人数・材料・分量・売場カテゴリをワンタップ抽出',
      '7日間×3食（朝・昼・夕）献立プランナー：iPad横画面やMacに最適な「1週間グリッド表示」と、iPhoneで片手操作しやすい「日別表示」を瞬時に切り替え（1枠に複数品登録可）',
      '人数倍率スケーリング：家族の基本人数（1〜20人）や食事ごとの人数を変更すると、材料の必要量が自動で比例計算（0.5個→1/2個などの分数表記にも対応）',
      '売場別・自動名寄せ買い物リスト：「野菜・果物」「肉・魚介」「乳・卵・大豆」「調味料・油」「主食・麺・パン」「加工品・その他」の6売場別に合算し、どの曜日の料理で使うかも逆引き表示',
      'Myレシピ帳（保存レシピ）& 定番サンプル：お気に入りレシピを「⭐️ レシピ帳に保存」してストック検索できるほか、オフラインでも使える定番9レシピと1週間サンプル献立を内蔵',
      'AirDrop レシピ共有 & LINE用テキスト出力：チェックボックス付き買い物リストをLINEやメモ帳へワンタップ共有。さらに .menucartrecipe ファイルでレシピや1週間献立を家族へAirDrop送受信',
    ],
    faqs: [
      {
        question: 'Gemini APIキーを設定しなくてもアプリは使えますか？',
        answer:
          'はい、すべての献立作成・手動レシピ登録・Myレシピ帳・定番サンプル適用・買い物リスト自動合算・AirDrop/LINE共有機能はAPIキーなしで完全に動作します。レシピURLからのAI自動抽出機能を使う場合のみ、Google AI Studioで無料発行できるご自身のGemini APIキーを設定画面からご登録ください。',
      },
      {
        question: '登録したAPIキーや献立データはどこに保存されますか？',
        answer:
          'ご自身のGemini APIキーや作成した献立・保存レシピ・買い物リストは、すべてお使いの端末内のローカルストレージ（UserDefaults）にのみ安全に保存されます。開発者のサーバーへ送信・収集されることは一切ありません。',
      },
      {
        question: '1つの食事枠（例：水曜日の夕食）に主菜と汁物の2品を登録できますか？',
        answer:
          'はい、可能です。各食事枠の「＋ 追加」ボタンから1枠に何品でも料理を追加でき、登録されたすべての料理の材料が買い物リストへ自動合算されます。',
      },
      {
        question: '特定の料理だけ食べる人数（例：来客用の4人分）を変えることはできますか？',
        answer:
          'はい。献立カード上の人数ステッパー、または料理編集画面の「この食事の人数」ステッパーを変更することで、その料理だけの倍率（例: 2.0x）を個別に調整できます。',
      },
    ],
    dataCollected: [
      '作成した週間献立データ・Myレシピ帳（保存レシピ）・買い物リストのチェック状態・ついで買いアイテム（すべてお使いの端末内の UserDefaults ローカル領域にのみ保存され、当方のサーバーへ送信されることはありません）',
      'ユーザー設定の Google Gemini API キー（端末内にのみ保存され、レシピ解析実行時にユーザーの端末から Google Gemini API エンドポイントへ直接通信する目的にのみ使用されます）',
      'AirDrop / ファイル共有データ（ユーザーが明示的に共有操作を行った際のみ、.menucartrecipe パッケージまたはLINE用テキストを生成してOS標準の共有シートへ渡します）',
    ],
    thirdPartyServices: [
      {
        name: 'Google Gemini API (Generative Language API)',
        purpose:
          'ユーザーが自身のAPIキーを設定し「AI解析」を実行した際のみ、入力されたレシピURLまたはレシピテキストから材料・分量を構造化抽出するために端末から直接リクエストを送信します。',
        policyUrl: 'https://policies.google.com/privacy',
      },
    ],
    inAppPurchases:
      'すべての機能（週間献立プランナー、Myレシピ帳、買い物リスト自動合算、AirDrop/LINE共有、BYOK方式によるGemini AI連携）を無料・広告なしでご利用いただけます。',
    privacySummary: {
      overviewJa:
        '「MenuCart」は、日々の食卓の献立データや買い物リスト、およびユーザーが設定するAPIキーのプライバシーを最優先に設計されています。当方は独自のバックエンドサーバーやトラッキング基盤を一切持たず、すべての献立・レシピデータはお使いの端末内にのみ保存されます。',
      overviewEn:
        'MenuCart is architected with an on-device privacy model. Your weekly meal plans, saved recipes, shopping lists, and optional user-provided Gemini API key are stored strictly locally on your Apple device and are never transmitted to any developer-operated server.',
      purposeItemsJa: [
        '週間献立データ、Myレシピ帳（保存レシピ）、買い物リストの進捗状況をお使いの端末内（UserDefaults）に保存・復元するため',
        'ユーザーが「✨ AI解析」を実行した際、指定されたレシピWebページのテキストを取得し、ユーザー設定の Google Gemini API を通じて材料・分量を自動抽出するため',
        'ユーザーの明示的な操作に基づき、LINE共有用テキストや AirDrop 共有用ファイル（.menucartrecipe）を生成・入出力するため',
      ],
      retentionItemsJa: [
        'すべての献立・保存レシピ・APIキー設定はお使いのデバイス内にのみ保持されます。設定画面や各画面からいつでも初期化・削除が可能であり、アプリをアンインストールすると端末内のすべてのデータが完全に削除されます。',
        '当方がユーザーのAPIキーや日々の献立内容を外部サーバーで収集・閲覧・保存することは一切ありません。',
      ],
    },
    termsSummary: {
      licenseScopeJa:
        '当方はユーザーに対し、Appleの標準エンドユーザー使用許諾契約（Standard Licensed Application EULA）に従い、ご自身が所有または管理するiPhone、iPad、またはMac上で「MenuCart」を非独占的かつ個人的に利用する権利を許諾します。',
      iapTermsJa:
        '本アプリは無料・広告なしで提供されます。なお、AIレシピ解析機能で利用する Google Gemini API キーはユーザーご自身で取得・設定（BYOK: Bring Your Own Key）する方式であり、Google AI Studio 側の利用規約および料金体系（無料枠等）が適用されます。',
      ipRightsJa:
        '本アプリ内のプログラム、合算アルゴリズム、UIデザイン、アイコンに関する知的財産権は当方に帰属します。ユーザーが外部レシピサイトのURLを取り込む際は、私的利用（家庭内での献立管理・買い物リスト作成）の範囲内でご利用ください。',
    },
  },
];

export function getAppBySlug(slug: string): AppItem | undefined {
  return APPS.find((app) => app.slug === slug);
}
