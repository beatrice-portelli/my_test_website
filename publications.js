tmp_publications_js = [
    {
        "title": "Distilling the Evidence to Augment Fact Verification Models",
        "authors": "<b>Beatrice Portelli</b>, Jason Zhao, Tal Schuster, Giuseppe Serra, Enrico Santus",
        "image": "images/distilling.png",
        "location": "FEVER 3 Workshop @ ACL 2020",
        "abstract": "The alarming spread of fake news in social media, together with the impossibility of scaling manual fact verification, motivated the development of natural language processing techniques to automatically verify the veracity of claims. Most approaches perform a claim-evidence classification without providing any insights about why the claim is trustworthy or not. We propose, instead, a model-agnostic framework that consists of two modules: (1) a span extractor, which identifies the crucial information connecting claim and evidence; and (2) a classifier that combines claim, evidence, and the extracted spans to predict the veracity of the claim. We show that the spans are informative for the classifier, improving performance and robustness. Tested on several state-of-the-art models over the Fever dataset, the enhanced classifiers consistently achieve higher accuracy while also showing reduced sensitivity to artifacts in the claims.",
        "url": "https://www.aclweb.org/anthology/2020.fever-1.7",
        "other": "",
        "date": "July 2020",
        "bibtex": `
@inproceedings{portelli-etal-2020-distilling,
    title = "Distilling the Evidence to Augment Fact Verification Models",
    author = "Portelli, Beatrice  and
      Zhao, Jason  and
      Schuster, Tal  and
      Serra, Giuseppe  and
      Santus, Enrico",
    booktitle = "Proceedings of the Third Workshop on Fact Extraction and VERification (FEVER)",
    year = {2020},
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://www.aclweb.org/anthology/2020.fever-1.7",
    doi = "10.18653/v1/2020.fever-1.7",
}`,
},

{
        "title": "The COVID-19 Infodemic: Can the Crowd Judge Recent Misinformation Objectively?",
        "authors": "Kevin Roitero, Michael Soprano, <b>Beatrice Portelli</b>, Damiano Spina, Vincenzo Della Mea, Giuseppe Serra, Stefano Mizzaro, Gianluca Demartini",
        "image": "",
        "location": "CIKM 2020",
        "abstract": `<p>Misinformation is an ever increasing problem that is difficult to solve for the research community and has a negative impact on the society at large. Very recently, the problem has been addressed with a crowdsourcing-based approach to scale up labeling efforts: to assess the truthfulness of a statement, instead of relying on a few experts, a crowd of (non-expert) judges is exploited. We follow the same approach to study whether crowdsourcing is an effective and reliable method to assess statements truthfulness during a pandemic. We specifically target statements related to the COVID-19 health emergency, that is still ongoing at the time of the study and has arguably caused an increase of the amount of misinformation that is spreading online (a phenomenon for which the term "infodemic" has been used). By doing so, we are able to address (mis)information that is both related to a sensitive and personal issue like health and very recent as compared to when the judgment is done: two issues that have not been analyzed in related work.</p>
<p>
In our experiment, crowd workers are asked to assess the truthfulness of statements, as well as to provide evidence for the assessments as a URL and a text justification. Besides showing that the crowd is able to accurately judge the truthfulness of the statements, we also report results on many different aspects, including: agreement among workers, the effect of different aggregation functions, of scales transformations, and of workers background / bias. We also analyze workers behavior, in terms of queries submitted, URLs found / selected, text justifications, and other behavioral data like clicks and mouse actions collected by means of an ad hoc logger.</p>`,
        "url": "https://doi.org/10.1145/3340531.3412048",
        "other": "",
        "date": "October 2020",
        "bibtex": `
@inbook{10.1145/3340531.3412048,
author = {Roitero, Kevin and Soprano, Michael and Portelli, Beatrice and Spina, Damiano and Della Mea, Vincenzo and Serra, Giuseppe and Mizzaro, Stefano and Demartini, Gianluca},
title = {The COVID-19 Infodemic: Can the Crowd Judge Recent Misinformation Objectively?},
year = {2020},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3340531.3412048},
booktitle = {Proceedings of the 29th ACM International Conference on Information & Knowledge Management},
}
`
},

{
        "title": "Keyphrase Generation with GANs in Low-Resources Scenarios",
        "authors": "Giuseppe Lancioni, Saida S Mohamed, <b>Beatrice Portelli</b>, Giuseppe Serra, Carlo Tasso",
        "image": "",
        "location": "SustaiNLP @ EMNLP 2020",
        "abstract": `<p>Keyphrase Generation is the task of predicting Keyphrases (KPs), short phrases that summarize the semantic meaning of a given document. Several past studies provided diverse approaches to generate Keyphrases for an input document. However, all of these approaches still need to be trained on very large datasets. In this paper, we introduce BeGanKP, a new conditional GAN model to address the problem of Keyphrase Generation in a low-resource scenario. Our main contribution relies in the Discriminator’s architecture: a new BERT-based module which is able to distinguish between the generated and humancurated KPs reliably. Its characteristics allow us to use it in a low-resource scenario, where only a small amount of training data are available, obtaining an efficient Generator. The resulting architecture achieves, on five public datasets, competitive results with respect to the state-of-the-art approaches, using less than 1% of the training data.</p>`,
        "url": "https://www.aclweb.org/anthology/2020.sustainlp-1.12",
        "other": "",
        "date": "November 2020",
        "bibtex": `
@inproceedings{lancioni-etal-2020-keyphrase,
    title = "Keyphrase Generation with {GAN}s in Low-Resources Scenarios",
    author = "Lancioni, Giuseppe  and
      S.Mohamed, Saida  and
      Portelli, Beatrice  and
      Serra, Giuseppe  and
      Tasso, Carlo",
    booktitle = "Proceedings of SustaiNLP: Workshop on Simple and Efficient Natural Language Processing",
    year = "2020",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://www.aclweb.org/anthology/2020.sustainlp-1.12",
    doi = "10.18653/v1/2020.sustainlp-1.12",
}
`
},

{
"title": "BERT Prescriptions to Avoid Unwanted Headaches: A Comparison of Transformer Architectures for Adverse Drug Event Detection",
"authors": "<b>Beatrice Portelli</b>, Edoardo Lenzi, Emmanuele Chersoni, Giuseppe Serra, Enrico Santus",
"image": "",
"location": "EACL 2021",
"abstract": `<p>Pretrained transformer-based models, such as BERT and its variants, have become a common choice to obtain state-of-the-art performances in NLP tasks. In the identification of Adverse Drug Events (ADE) from social media texts, for example, BERT architectures rank first in the leaderboard. However, a systematic comparison between these models has not yet been done. In this paper, we aim at shedding light on the differences between their performance analyzing the results of 12 models, tested on two standard benchmarks. SpanBERT and PubMedBERT emerged as the best models in our evaluation: this result clearly shows that span-based pretraining gives a decisive advantage in the precise recognition of ADEs, and that in-domain language pretraining is particularly useful when the transformer model is trained just on biomedical text from scratch.</p>`,
"url": "https://www.aclweb.org/anthology/2021.eacl-main.149",
"other": "",
"date": "April 2021",
"bibtex": `
@inproceedings{portelli-etal-2021-bert,
    title = "{BERT} Prescriptions to Avoid Unwanted Headaches: A Comparison of Transformer Architectures for Adverse Drug Event Detection",
    author = "Portelli, Beatrice  and
      Lenzi, Edoardo  and
      Chersoni, Emmanuele  and
      Serra, Giuseppe  and
      Santus, Enrico",
    booktitle = "Proceedings of the 16th Conference of the European Chapter of the Association for Computational Linguistics: Main Volume",
    year = "2021",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://www.aclweb.org/anthology/2021.eacl-main.149",
}`
},

{
"title": "Improving Adverse Drug Event Extraction with SpanBERT on Different Text Typologies",
"authors": "<b>Beatrice Portelli</b>, Daniele Passabì, Edoardo Lenzi, Giuseppe Serra, Enrico Santus, Emmanuele Chersoni",
"image": "",
"location": "W3PHIAI-21 @ AAAI 2021",
"abstract": `
<p>
In recent years, Internet users are reporting Adverse Drug Events (ADE) on social media, blogs and health forums. Because of the large volume of reports, pharmacovigilance is seeking to resort to NLP to monitor these outlets. We propose for the first time the use of the SpanBERT architecture for the task of ADE extraction: this new version of the popular BERT transformer showed improved capabilities with multi-token text spans. We validate our hypothesis with experiments on two datasets (SMM4H and CADEC) with different text typologies (tweets and blog posts), finding that SpanBERT combined with a CRF outperforms all the competitors on both of them.
</p>
`,
"url": "https://arxiv.org/abs/2105.08882",
"other": "",
"date": "May 2021",
"bibtex": `
@misc{portelli2021improving,
      title={Improving Adverse Drug Event Extraction with SpanBERT on Different Text Typologies}, 
      author={Beatrice Portelli and Daniele Passabì and Edoardo Lenzi and Giuseppe Serra and Enrico Santus and Emmanuele Chersoni},
      year={2021},
      eprint={2105.08882},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}

@inproceedings{portelli2021improving,
      title={Improving Adverse Drug Event Extraction with SpanBERT on Different Text Typologies}, 
      author={Beatrice Portelli and Daniele Passabì and Edoardo Lenzi and Giuseppe Serra and Enrico Santus and Emmanuele Chersoni},
      year={2021},
      booktitle = "Proceedings of the 5th International Workshop on Health Intelligence (W3PHIAI-21)",
    year = "2021",
    address = "Online"
}`
},

    
]