import type { ImageMetadata } from 'astro';
import chordTrainerIcon from '../assets/icons/chordtrainer.png';
import sketchChordIcon from '../assets/icons/sketchchord.png';

export type AppCategory = 'All' | 'Music' | 'Education' | 'Creativity';

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

export const CATEGORIES: AppCategory[] = ['All', 'Music', 'Education', 'Creativity'];

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
    iosRequirement: 'iOS 17.0+ / iPadOS 17.0+',
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
      '「理論書でコードは覚えたけれど、鍵盤を前にするとパッと指が動かない」「ジャズやポップスの定番コード進行をスムーズに両手で繋ぎたい」というキーボーディスト、作曲家、DTMerのために設計されました。USBまたはBluetooth接続されたMIDIキーボード（Apple CoreMIDI）の押下音をゼロレイテンシーで検出し、正解和音とリアルタイム照合。大型タッチ鍵盤も備えており、iPhone・iPad単体でも本格的なボイシング練習が可能です。',
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
        purpose: '開発者応援チップ（¥100）の決済処理およびサポーター特典（チェンバロ配色鍵盤）の購入復元・検証にのみ使用します。',
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
        '当方はユーザーに対し、Appleの標準エンドユーザー使用許諾契約（Standard Licensed Application EULA）に従い、ご自身が所有または管理するiPhoneまたはiPad上で「ChordTrainer」を非独占的かつ個人的に利用する権利を許諾します。',
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
    iosRequirement: 'iOS 17.0+ / iPadOS 17.0+',
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
      'ボイスリーディング & クイック転回バー：ベース転回（オンコード）と右手ボイシング転回（RH Inversion）をワンタップで切り替え、3オクターブ鍵盤ビジュアライザーで視覚化',
      'リピート記号シーケンサー & セクション編集：反復記号（|: / :|）の自動2回ループ演奏、[Intro] [A] [B] [Chorus] 等のセクション枠線、4小節行コピー機能',
      'AVAudioEngine リアルタイムPCM合成エンジン：ベル倍音を含む Electric Piano、木製の温かみを持つ Warm Piano、ふくよかな Soft Pad を内蔵',
      '自動保存（Auto-Save）& リードシートテキスト共有：作成したスケッチを JSON 形式で安全にローカル永続化し、整形されたテキストコード譜としてワンタップでコピー・共有',
    ],
    faqs: [
      {
        question: '音が出ません。どうすれば良いですか？',
        answer:
          'iPhone / iPad の消音スイッチ（マナーモード）がONになっていないか、システムボリュームがミュートになっていないかご確認ください。Bluetoothイヤホン等の接続直後は、再生ボタンを一度押すことでオーディオエンジン（AVAudioEngine）が自動起動します。',
      },
      {
        question: 'プリセット曲を編集してそのまま保存できますか？',
        answer:
          'プリセットテンプレート（カノン進行・丸の内進行・王道進行・ジャジーロック進行など）の誤った上書きを防ぐため、プリセット曲への直接の上書き保存は制限されています。編集した内容を保存したい場合は、ツールバーの「別名保存」を押して、マイスケッチとして新規保存してください。',
      },
      {
        question: '1小節まるごと1つのコード（全音符）を鳴らしたいです。',
        answer:
          '1拍目にコードを入力したあと、2拍目・3拍目・4拍目に対して「— 伸ばす」ボタンを3回押してください。楽譜上にタイ記号（—）が配置され、音が途切れずに1小節分美しく持続します。',
      },
      {
        question: 'iPhoneやiPadで画面を広く使いたい時は？',
        answer:
          'パレット右上の「パレットを隠す」ボタンを押してください。下部パレットがスムーズに収納され、画面いっぱいに五線譜が広がります。収納中も現在の選択コードや試聴ボタンはコンパクトに常時表示されます。',
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
        '「SketchChord」は、作曲家やミュージシャンの創作アイデア（楽曲スケッチ）のプライバシーを最優先に設計されています。すべてのコード譜データや音源合成処理はお使いのデバイス（iOS / iPadOS）内で完結し、外部サーバーへのデータ送信や行動トラッキングは一切行いません。',
      overviewEn:
        'SketchChord is designed to protect your musical ideas and chord sketches with complete on-device privacy. All score editing, smart voicing calculations, and PCM audio synthesis run 100% locally on your iPhone or iPad without any external servers or analytics trackers.',
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
        '当方はユーザーに対し、Appleの標準エンドユーザー使用許諾契約（Standard Licensed Application EULA）に従い、ご自身が所有または管理するiPhoneまたはiPad（iOS / iPadOSデバイス）上で「SketchChord」を非独占的に利用する権利を許諾します。',
      iapTermsJa:
        '本アプリにはユーザーの創作を妨げる広告表示や強制課金は一切含まれません。万が一将来的に追加パックやApp内課金が導入される場合も、Apple App Storeの決済システム（StoreKit）を通じて明確な同意のもとでのみ提供されます。',
      ipRightsJa:
        '重要（ユーザーの創作物の権利）：ユーザーが本アプリ（SketchChord）を使用して作成・アレンジ・出力したコード進行、楽曲スケッチ、および音楽作品の著作権・商用利用権は、100%ユーザーご自身に帰属します。当方がユーザーの楽曲データに対して権利を主張することは一切ありません。一方、本アプリ自体のソースコード、UIデザイン、PCM合成アルゴリズムに関する知的財産権は当方に帰属します。',
    },
  },
];

export function getAppBySlug(slug: string): AppItem | undefined {
  return APPS.find((app) => app.slug === slug);
}
