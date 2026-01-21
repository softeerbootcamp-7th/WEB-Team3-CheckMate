package com.checkmate.backend.api;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Test", description =
        "테스트 관련 API 입니다."
)
@RestController
@RequestMapping("/api/v1/test")
public class TestController {

    @Operation(
            summary = "테스트 API (용범)",
            description =
                    "여기는 description 입니다."
    )
    @ApiResponses({
            @io.swagger.v3.oas.annotations.responses.ApiResponse(responseCode = "200", description = "응답 성공!"),
            @io.swagger.v3.oas.annotations.responses.ApiResponse(responseCode = "4XX", description = "예외 메시지입니다!"),
            @io.swagger.v3.oas.annotations.responses.ApiResponse(responseCode = "500", description = "여기도 예외 메시지입니다!"),
    })
    @GetMapping
    public ResponseEntity<TestResponseDTO> test(@RequestBody TestRequestDTO testRequestDTO) {
        TestResponseDTO testResponseDTO = new TestResponseDTO(3231, "문자열입니다.");

        return ResponseEntity.ok(testResponseDTO);
    }
}

