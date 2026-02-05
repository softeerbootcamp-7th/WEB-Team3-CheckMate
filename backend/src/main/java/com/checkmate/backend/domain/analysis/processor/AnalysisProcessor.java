package com.checkmate.backend.domain.analysis.processor;

import com.checkmate.backend.domain.analysis.AnalysisContext;

public interface AnalysisProcessor {
    void process(AnalysisContext analysisContext);
}
