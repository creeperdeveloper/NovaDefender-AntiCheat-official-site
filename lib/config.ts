import { Shield, Zap, Ban, Eye, Sword, Plane, User, Download, Heart, Github } from 'lucide-react'

export const SITE_CONFIG = {
  name: "NovaDefender",
  description: "Advanced AntiCheat for Minecraft Bedrock",
  githubUrl: "https://github.com/creeperdeveloper/NovaDefender-AntiCheat",
  downloadUrl: "https://github.com/creeperdeveloper/NovaDefender-AntiCheat/releases/latest",
  version: "v1.2.8",
  developer: {
    name: "creeper_dev",
    github: "creeperdeveloper",
    githubUrl: "https://github.com/creeperdeveloper"
  }
}

export const FEATURES = {
  en: [
    {
      icon: Sword,
      title: "Killaura Detection",
      description: "Monitors player attack speed and reach to detect Killaura cheats with high precision",
    },
    {
      icon: Ban,
      title: "Banned Item Checker",
      description: "Detects and removes prohibited items, with instant notifications to administrators",
    },
    {
      icon: Eye,
      title: "Entity Monitoring",
      description: "Monitors banned entities and excessive spawn counts to prevent server lag",
    },
    {
      icon: Zap,
      title: "Over Enchantment Detection",
      description: "Detects unauthorized enchantment levels and removes illegal items automatically",
    },
    {
      icon: Plane,
      title: "Fly/Speed Detection",
      description: "Advanced movement detection with reduced false positives for Elytra users",
    },
    {
      icon: Shield,
      title: "Ban Management",
      description: "A fully integrated ban system featuring efficient ban and unban control",
    },
  ],
  ja: [
    {
      icon: Sword,
      title: "キルオーラ検出",
      description: "プレイヤーの攻撃速度とリーチを監視して高精度でキルオーラを検出します",
    },
    {
      icon: Ban,
      title: "禁止アイテムチェッカー",
      description: "禁止アイテムの所持を検出し、削除と管理者への通知を即座に実行します",
    },
    {
      icon: Eye,
      title: "エンティティ監視",
      description: "禁止エンティティと過剰なスポーン数を監視してサーバーラグを防止します",
    },
    {
      icon: Zap,
      title: "オーバーエンチャント検出",
      description: "許可されていないエンチャントレベルを検出し、不正アイテムを自動削除します",
    },
    {
      icon: Plane,
      title: "飛行/速度検出",
      description: "エリトラユーザーの誤検知を減らした高度な移動検出システムです",
    },
    {
      icon: Shield,
      title: "Ban",
      description: "Banと簡単なUnban機能を備えた包括的なBanシステムです",
    },
  ],
}

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      download: "Download",
      developer: "Developer",
      donate: "Donate",
    },
    hero: {
      title: "Minecraft NovaDefender AntiCheat",
      subtitle: "Minecraft Bedrock AntiCheat",
      description:
        "Protecting your Minecraft Bedrock Edition server from threats with a powerful ScriptAPI-based anti-cheat.",
      downloadBtn: "Download Latest",
      githubBtn: "GitHub",
    },
    features: {
      title: "Features",
      subtitle: "NovaDefender AntiCheat Features",
    },
    download: {
      title: "Download NovaDefender",
      subtitle: "Get the latest version of NovaDefender AntiCheat",
      latestRelease: "Latest Release",
      downloadBtn: "Download GitHub",
      viewSource: "View Source Code",
      requirements: "Requirements",
      requirementsList: [
        "Minecraft Bedrock Edition v1.21.90",
        "Script API Beta",
        "Administrator Permissions"
      ]
    },
    developer: {
      title: "Meet the Developer",
      subtitle: "Developer",
      name: "creeper_dev",
      bio: "An anti-cheat developer who loves Minecraft, focused on creating tools for griefing prevention and cheat detection.",
      githubBtn: "View GitHub Profile",
      projectsBtn: "View Projects"
    },
    donate: {
      title: "Support Development",
      subtitle: "Help keep NovaDefender free and actively developed",
      message: "Development is currently in progress. Donation options will be available soon!",
      whyDonate: "Why Donate?",
      reasons: [
        "Keep the project free and open source",
        "Support continuous development and updates",
        "Help maintain server infrastructure",
        "Enable faster bug fixes and new features"
      ],
      comingSoon: "Coming Soon"
    },
    footer: {
      copyright: "© 2025 NovaDefender. All rights reserved.",
      madeWith: "created by creeper_dev",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      features: "機能",
      download: "ダウンロード",
      developer: "開発者",
      donate: "寄付",
    },
    hero: {
      title: "Minecraft NovaDefender AntiCheat",
      subtitle: "Minecraft Bedrock AntiCheat",
      description:
        "Minecraft Bedrock Edition サーバー向けのScriptAPIアンチチートでワールドを脅威から保護します",
      downloadBtn: "Download Latest",
      githubBtn: "GitHub",
    },
    features: {
      title: "機能",
      subtitle: "NovaDefender AntiCheat Features",
    },
    download: {
      title: "NovaDefenderをダウンロード",
      subtitle: "NovaDefender AntiCheatの最新バージョンを入手",
      latestRelease: "最新リリース",
      downloadBtn: "ダウンロード",
      viewSource: "ソースコードを見る",
      requirements: "動作要件",
      requirementsList: [
        "Minecraft Bedrock Edition v1.21.90",
        "Script API Beta",
        "管理者権限"
      ]
    },
    developer: {
      title: "開発者について",
      subtitle: "Developer",
      name: "creeper_dev",
      bio: "マイクラが好きなアンチチート開発者 荒らし対策とアンチチート開発をやっています",
      githubBtn: "GitHub",
      projectsBtn: "プロジェクト"
    },
    donate: {
      title: "開発をサポート",
      subtitle: "NovaDefenderを無料で活発に開発し続けるためのサポート",
      message: "現在開発中です。寄付オプションは近日公開予定です！",
      whyDonate: "なぜ寄付するのか？",
      reasons: [
        "プロジェクトを無料でオープンソースに保つ",
        "継続的な開発とアップデートをサポート",
        "サーバーインフラの維持を支援",
        "より迅速なバグ修正と新機能の実現"
      ],
      comingSoon: "近日公開"
    },
    footer: {
      copyright: "© 2024 NovaDefender. All rights reserved.",
      madeWith: "Minecraftコミュニティのために ❤️ で作成",
    },
  },
}
