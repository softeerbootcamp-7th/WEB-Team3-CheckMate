package com.checkmate.backend.domain.analysis.processor;

import com.checkmate.backend.domain.analysis.AnalysisContext;
import com.checkmate.backend.domain.analysis.enums.AnalysisCardCode;

public interface AnalysisProcessor {
    boolean supports(AnalysisCardCode analysisCardCode);

    void process(AnalysisContext analysisContext);
}
