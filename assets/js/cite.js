/* ============================================================
   Citations — "Cite" buttons that copy BibTeX to the clipboard
   Entries generated from the CV. Keys match data-cite attributes.
   ============================================================ */
(function () {
  "use strict";

  var BIBTEX = {
    // ---- Journal Articles ----
    "kuukkanen2026lyme":
`@article{kuukkanen2026lyme,
  author  = {Kuukkanen, I. and Muluh, G. and Klisura, Đorđe and Kortela, E. and Pietikäinen, A. and Lahti, L. and Hytönen, J. and Karonen, M.},
  title   = {Application of Mass Spectrometry-Based Metabolomics and Machine Learning in the Diagnostics of Lyme Neuroborreliosis},
  journal = {ACS Omega},
  year    = {2026}
}`,
    "torabi2024iot":
`@article{torabi2024iot,
  author  = {Torabi, S. and Klisura, Đorđe and Khoury, J. and Bou-Harb, E. and Assi, C. and Debbabi, M.},
  title   = {Internet-Wide Analysis, Characterization, and Family Attribution of {IoT} Malware: A Comprehensive Longitudinal Study},
  journal = {IEEE Transactions on Dependable and Secure Computing},
  year    = {2024}
}`,

    // ---- Conference Papers ----
    "klisura2026roleconditioned":
`@inproceedings{klisura2026roleconditioned,
  author    = {Klisura, Đorđe and Khoury, J. and Kundu, A. and Krishnan, R. and Rios, A.},
  title     = {Role-Conditioned Refusals: Evaluating Access Control Reasoning in Large Language Models},
  booktitle = {Findings of the Association for Computational Linguistics: EACL 2026},
  month     = mar,
  year      = {2026},
  publisher = {Association for Computational Linguistics}
}`,
    "klisura2025multiagent":
`@inproceedings{klisura2025multiagent,
  author    = {Klisura, Đorđe and Bernaga, A. and Gárate, A. K. and Roshan, R. and Yang, K. and Pataci, H. and Rios, A.},
  title     = {A Multi-Agent Framework for Mitigating Dialect Biases in Privacy Policy Question-Answering Systems},
  booktitle = {Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
  year      = {2025},
  publisher = {Association for Computational Linguistics}
}`,
    "klisura2025textsql":
`@inproceedings{klisura2025textsql,
  author    = {Klisura, Đorđe and Rios, A.},
  title     = {Unmasking Database Vulnerabilities: Zero-Knowledge Schema Inference Attacks in Text-to-SQL Systems},
  booktitle = {Findings of the Association for Computational Linguistics: NAACL 2025},
  month     = apr,
  year      = {2025},
  pages     = {6954--6976},
  publisher = {Association for Computational Linguistics},
  isbn      = {979-8-89176-195-7}
}`,
    "richardson2025fairprivacy":
`@inproceedings{richardson2025fairprivacy,
  author    = {Richardson, T. and Klisura, Đorđe and Pataci, H. and Rios, A.},
  title     = {FairPrivacy: A Robust Q\\&A System for Enhancing Transparency in IoT},
  booktitle = {AMCIS 2025 Proceedings},
  year      = {2025},
  note      = {Paper 48}
}`,
    "khoury2024jbeil":
`@inproceedings{khoury2024jbeil,
  author    = {Khoury, J. and Klisura, Đorđe and Zanddizari, H. and De La Torre Parra, G. and Najafirad, P. and Bou-Harb, E.},
  title     = {Jbeil: Temporal Graph-Based Inductive Learning to Infer Lateral Movement in Evolving Enterprise Networks},
  booktitle = {2024 IEEE Symposium on Security and Privacy (S\\&P)},
  year      = {2024},
  pages     = {3644--3660},
  publisher = {IEEE}
}`,
    "rammouz2023helium":
`@inproceedings{rammouz2023helium,
  author    = {Rammouz, V. and Khoury, J. and Klisura, Đorđe and Pour, M. S. and Fachkha, C. and Bou-Harb, E.},
  title     = {Helium-Based IoT Devices: Threat Analysis and Internet-Scale Exploitations},
  booktitle = {2023 19th International Conference on Wireless and Mobile Computing, Networking and Communications (WiMob)},
  year      = {2023},
  pages     = {206--211},
  publisher = {IEEE}
}`,
    "husak2023situational":
`@inproceedings{husak2023situational,
  author    = {Husák, M. and Khoury, J. and Klisura, Đorđe and Bou-Harb, E.},
  title     = {On the Provision of Network-Wide Cyber Situational Awareness via Graph-Based Analytics},
  booktitle = {International Conference on Complex Computational Ecosystems},
  year      = {2023},
  pages     = {167--179},
  publisher = {Springer}
}`,
    "husak2023pivoting":
`@inproceedings{husak2023pivoting,
  author    = {Husák, M. and Jang, S. J. and Khoury, J. and Klisura, Đorđe and Bou-Harb, E.},
  title     = {Unraveling Network-Based Pivoting Maneuvers: Empirical Insights and Challenges},
  booktitle = {14th EAI International Conference on Digital Forensics \\& Cyber Crime},
  address   = {New York City, USA},
  month     = dec,
  year      = {2023}
}`,
    "klisura2021embedding":
`@inproceedings{klisura2021embedding,
  author    = {Klisura, Đorđe},
  title     = {Embedding Non-Planar Graphs: Storage and Representation},
  booktitle = {Proceedings of the 2021 7th Student Computer Science Research Conference},
  year      = {2021},
  pages     = {57}
}`,

    // ---- Workshops ----
    "alvarez2023gamecheating":
`@inproceedings{alvarez2023gamecheating,
  author    = {Alvarez, R. and Bhatt, P. and Klisura, Đorđe and Choo, K. K.},
  title     = {Predicting Game Cheating Behavior Through the Social Network},
  booktitle = {Dewald Roode Workshop on Information Systems Security Research},
  volume    = {8},
  year      = {2023}
}`,

    // ---- Preprints ----
    "klisura2026dialect":
`@misc{klisura2026dialect,
  author = {Klisura, Đorđe and Džiho, F. and Menard, P. and Rios, A.},
  title  = {Reducing Dialect-Induced Refusal Disparities in Large Language Models with Prompt-Probe-Gated Decoding},
  year   = {2026},
  note   = {arXiv preprint}
}`,
    "rammouz2026mechanistic":
`@misc{rammouz2026mechanistic,
  author = {Rammouz, V. and Klisura, Đorđe and Rios, A.},
  title  = {Mechanistic Access Control in Large Language Models via Latent Refusal Probing},
  year   = {2026},
  note   = {arXiv preprint}
}`
  };

  /* ---------- Build the modal once ---------- */
  var modal = document.createElement("div");
  modal.className = "cite-modal";
  modal.setAttribute("hidden", "");
  modal.innerHTML =
    '<div class="cite-modal__box" role="dialog" aria-modal="true" aria-label="BibTeX citation">' +
      '<div class="cite-modal__head">' +
        '<span class="cite-modal__title">BibTeX</span>' +
        '<button class="cite-modal__close" aria-label="Close">&times;</button>' +
      '</div>' +
      '<pre class="cite-modal__text" tabindex="0"></pre>' +
      '<button class="cite-modal__copy">Copy to clipboard</button>' +
    '</div>';
  document.body.appendChild(modal);

  var box = modal.querySelector(".cite-modal__box");
  var pre = modal.querySelector(".cite-modal__text");
  var copyBtn = modal.querySelector(".cite-modal__copy");
  var closeBtn = modal.querySelector(".cite-modal__close");
  var lastFocused = null;

  function openModal(text) {
    pre.textContent = text;
    copyBtn.textContent = "Copy to clipboard";
    lastFocused = document.activeElement;
    modal.removeAttribute("hidden");
    requestAnimationFrame(function () { modal.classList.add("show"); });
    copyBtn.focus();
  }
  function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("hidden", "");
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function copyText(text, btn) {
    var done = function () {
      if (btn) { btn.textContent = "Copied ✓"; btn.classList.add("done"); }
      setTimeout(function () {
        if (btn) { btn.textContent = btn.classList.contains("cite-modal__copy") ? "Copy to clipboard" : "Cite"; btn.classList.remove("done"); }
      }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text); done();
    }
  }
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ---------- Wire up the per-paper Cite buttons ---------- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".cite-btn");
    if (btn) {
      var key = btn.getAttribute("data-cite");
      var bib = BIBTEX[key];
      if (bib) openModal(bib);
      return;
    }
    if (e.target === modal) closeModal();           // click backdrop
  });

  copyBtn.addEventListener("click", function () { copyText(pre.textContent, copyBtn); });
  closeBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hasAttribute("hidden")) closeModal();
  });
})();
